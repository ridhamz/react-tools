import { useMemo, useState } from 'react';

export default useSessionStorage = (key, initialValue) => {
  const [storedData, setStoredData] = useState(() => {
    if (getItem(key)) return getItem(key);
    setItem(key, initialValue);
    return initialValue;
  });

  const getItem = (key) => JSON.parse(sessionStorage.getItem(key));

  const setItem = (key, value) =>
    JSON.stringify(sessionStorage.setItem(key, value));

  useMemo(() => {
    const data = getItem(key);
    if (data) setStoredData(data);
  });

  return { storedData, getItem, setItem };
};

