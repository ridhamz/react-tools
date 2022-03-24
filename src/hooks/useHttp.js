import { useState, useCallback, useRef, useEffect, useContext } from 'react';

const useHttp = (token) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const activeHttpRequest = useRef([]);

  // GET THE URL FROM THE .ENV FILE
  const baseUrl = process.env.REACT_APP_API_endpoint;

  // GET THE TOKEN FROM LOCAL STORAGE

  const request = (args) => fetch(...args);

  const clearError = () => setError(null);

  // THIS FUNCTION WILL BE USED TO SEND HTTP REQUESTS ( the default method is get)
  const sendRequest = useCallback(async (url, method = 'get', body = null) => {
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

  // RETURN VALUES
  return { sendRequest, isLoading, error, clearError };
};

export default useHttp;
