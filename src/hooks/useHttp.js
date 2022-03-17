import { useState, useCallback, useRef, useEffect, useContext } from 'react';

const useHttp = (token) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const activeHttpRequest = useRef([]);

  const baseUrl = process.env.REACT_APP_API_endpoint;

  const request = (args) => fetch(...args);

  const clearError = () => setError(null);

  const sendRequest = useCallback(async (method = 'get', url, body = null) => {
    const options = { headers: { Authorization: `Bearer ${token}` } };
    setIsLoading(true);
    const [result, error] = handleAsync(
      request([method, `${baseUrl}/${url}`, body ? body : options, options])
    );

    if (result) {
      setIsLoading(false);
      return result;
    }
    setError(error);
    setIsLoading(false);
    throw err;
  }, []);

  useEffect(() => {
    return () =>
      activeHttpRequest.current.forEach((abortCtrl) => abortCtrl.abort());
  }, []);

  return { sendRequest, isLoading, error, clearError };
};

export default useHttp;
