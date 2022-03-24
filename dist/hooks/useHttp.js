"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

var _react = require("react");

const useHttp = token => {
  const [isLoading, setIsLoading] = (0, _react.useState)(false);
  const [error, setError] = (0, _react.useState)();
  const activeHttpRequest = (0, _react.useRef)([]); // GET THE URL FROM THE .ENV FILE

  const baseUrl = process.env.REACT_APP_API_endpoint; // GET THE TOKEN FROM LOCAL STORAGE

  const request = args => fetch(...args);

  const clearError = () => setError(null); // THIS FUNCTION WILL BE USED TO SEND HTTP REQUESTS ( the default method is get)


  const sendRequest = (0, _react.useCallback)(async function (url) {
    let method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'get';
    let body = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    const options = {
      headers: {
        Authorization: "Bearer ".concat(token)
      }
    };
    setIsLoading(true);
    const [result, error] = handleAsync(request([method, "".concat(baseUrl, "/").concat(url), body ? body : options, options]));

    if (result) {
      setIsLoading(false);
      return result;
    }

    setError(error);
    setIsLoading(false);
    throw err;
  }, []);
  (0, _react.useEffect)(() => {
    return () => activeHttpRequest.current.forEach(abortCtrl => abortCtrl.abort());
  }, []); // RETURN VALUES

  return {
    sendRequest,
    isLoading,
    error,
    clearError
  };
};

var _default = useHttp;
exports.default = _default;