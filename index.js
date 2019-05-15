var saferClass = (function (exports) {
  'use strict';

  /*! (c) Andrea Giammarchi - ISC */
  var call = Function.call;
  var bind = call.bind(call.bind);
  var apply = bind(call, call.apply);
  call = bind(call, call);

  /*! (c) Andrea Giammarchi - ISC */

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

  var saferObject = object => {
    const self = object;
    const names = [];
    const descriptors = [];
    do {
      getOwnPropertyNames(object).forEach(name => {
        if (!names.includes(name)) {
          names.push(name);
          descriptors.push(getOwnPropertyDescriptor(object, name));
        }
      });
    }
    while (object = getPrototypeOf(object));
    names.forEach((name, i) => {
      defineProperty(self, name, updated(descriptors[i]));
    });
    return self;
  };

  /*! (c) Andrea Giammarchi - ISC */

  var index = Class => (
    saferObject(Class.prototype),
    saferObject(Class)
  );

  

  return index;

}({}));
