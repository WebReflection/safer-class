# safer-class

<sup>**Social Media Photo by [freestocks.org](https://unsplash.com/@freestocks) on [Unsplash](https://unsplash.com/)**</sup>

[![Build Status](https://travis-ci.com/WebReflection/safer-class.svg?branch=master)](https://travis-ci.com/WebReflection/safer-class) [![Coverage Status](https://coveralls.io/repos/github/WebReflection/safer-class/badge.svg?branch=master)](https://coveralls.io/github/WebReflection/safer-promise?branch=master) ![WebReflection status](https://offline.report/status/webreflection.svg)

Flattened classes with non configurable fields (basically [safer-object](https://github.com/WebReflection/safer-object) applied to classes and prototypes).

```js
import saferClass from 'safer-class';

const MyPromise = saferClass(class extends Promise {});

// even if inherited methods change
Promise.prototype.then = function () {
  throw new Error('Muahahahahaha!');
};

// instances from MyPromise will work like a charm
MyPromise.resolve('whatever').then(() => console.log('all good'));

```

Remember to eventually freeze the instance if you want extra safety.
