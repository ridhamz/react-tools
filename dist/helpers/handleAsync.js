"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = handleAsync;

require("core-js/modules/es.promise.js");

async function handleAsync(fn) {
  try {
    const result = await fn();
    return [result || true, null];
  } catch (error) {
    return [null, error];
  }
}