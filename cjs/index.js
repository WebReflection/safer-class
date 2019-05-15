'use strict';
/*! (c) Andrea Giammarchi - ISC */

const {call} = require('safer-function');

const {
  defineProperty,
  getPrototypeOf,
  getOwnPropertyDescriptor,
  getOwnPropertyNames,
  hasOwnProperty
} = Object;

const falsify = (descriptor, name) => {
  defineProperty(descriptor, name, {
    enumerable: true,
    value: false
  });
};

const updated = descriptor => {
  falsify(descriptor, 'configurable');
  if (call(hasOwnProperty, descriptor, 'writable'))
    falsify(descriptor, 'writable');
  return descriptor;
};

Object.defineProperty(exports, '__esModule', {value: true}).default = Class => {
  const Super = Class;
  const classNames = [];
  const classDescriptors = [];
  const protoNames = [];
  const protoDescriptors = [];
  do {
    getOwnPropertyNames(Class).forEach(name => {
      if (!classNames.includes(name)) {
        classNames.push(name);
        classDescriptors.push(getOwnPropertyDescriptor(Class, name));
      }
    });
    const {prototype} = Class;
    if (prototype)
      getOwnPropertyNames(prototype).forEach(name => {
        if (!protoNames.includes(name)) {
          protoNames.push(name);
          protoDescriptors.push(getOwnPropertyDescriptor(prototype, name));
        }
      });
  }
  while (Class = getPrototypeOf(Class));
  classNames.forEach((name, i) => {
    defineProperty(Super, name, updated(classDescriptors[i]));
  });
  const {prototype} = Super;
  protoNames.forEach((name, i) => {
    defineProperty(prototype, name, updated(protoDescriptors[i]));
  });
  return Super;
};
