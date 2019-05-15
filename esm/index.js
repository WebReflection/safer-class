/*! (c) Andrea Giammarchi - ISC */

import saferObject from 'safer-object';

export default Class => (
  saferObject(Class.prototype),
  saferObject(Class)
);
