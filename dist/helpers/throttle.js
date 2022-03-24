"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = throttle;

require("core-js/modules/web.dom-collections.iterator.js");

function throttle(fn, delay) {
  let run = false;
  return function () {
    if (!run) {
      fn(...arguments);
      run = true;
      setTimeout(() => run = false, delay);
    }
  };
}