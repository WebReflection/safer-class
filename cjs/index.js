'use strict';
/*! (c) Andrea Giammarchi - ISC */

const saferObject = (m => m.__esModule ? /* istanbul ignore next */ m.default : /* istanbul ignore next */ m)(require('safer-object'));

Object.defineProperty(exports, '__esModule', {value: true}).default = Class => (
  saferObject(Class.prototype),
  saferObject(Class)
);
