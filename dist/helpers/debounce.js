"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = debounce;

require("core-js/modules/web.dom-collections.iterator.js");

function debounce(fn, delay) {
  let timer;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}