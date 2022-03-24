"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAsync = useAsync;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = require("react");

function useAsync(fn) {
  let dependencies = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  // define states
  const [result, setResult] = (0, _react.useState)(null);
  const [err, setError] = (0, _react.useState)(null);
  const [render, setRender] = (0, _react.useState)(false); // side effects

  (0, _react.useEffect)(() => {
    (async () => {
      try {
        const response = await fn();
        setResult(response);
      } catch (error) {
        setError(error);
      }
    })(); // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [render, ...dependencies]);

  const refresh = () => setRender(v => !v);

  return [result, err, refresh];
}