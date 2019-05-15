const {default:saferClass} = require('../cjs');

const SaferPromise = saferClass(class extends Promise {});

Promise.prototype.then = function () {
  throw new Error('this should not happen');
};

const sp = new SaferPromise($ => $('OK'));
sp.then(console.log);
