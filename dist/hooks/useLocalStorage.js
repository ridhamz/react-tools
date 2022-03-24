"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.json.stringify.js");

var _react = require("react");

var _default = useLocalStorage = (key, initialValue) => {
  const [storedData, setStoredData] = (0, _react.useState)(() => {
    if (getItem(key)) return getItem(key);
    setItem(key, initialValue);
    return initialValue;
  });

  const getItem = key => JSON.parse(localStorage.getItem(key));

  const setItem = (key, value) => JSON.stringify(localStorage.setItem(key, value));

  (0, _react.useMemo)(() => {
    const data = getItem(key);
    if (data) setStoredData(data);
  });
  return {
    storedData,
    getItem,
    setItem
  };
};

exports.default = _default;