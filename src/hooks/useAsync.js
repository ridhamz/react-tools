import { useState, useEffect } from 'react';

export function useAsync(fn, dependencies = []) {
  // define states
  const [result, setResult] = useState(null);
  const [err, setError] = useState(null);
  const [render, setRender] = useState(false);

  // side effects
  useEffect(() => {
    (async () => {
      try {
        const response = await fn();
        setResult(response);
      } catch (error) {
        setError(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render, ...dependencies]);

  const refresh = () => setRender((v) => !v);

  return [result, err, refresh];
}
