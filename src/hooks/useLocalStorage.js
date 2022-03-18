import { useMemo, useState } from 'react';

export default useLocalStorage = (key, initialValue) => {
  const [storedData, setStoredData] = useState(() => {
    if (getItem(key)) return getItem(key);
    setItem(key, initialValue);
    return initialValue;
  });

  const getItem = (key) => JSON.parse(localStorage.getItem(key));

  const setItem = (key, value) =>
    JSON.stringify(localStorage.setItem(key, value));

  useMemo(() => {
    const data = getItem(key);
    if (data) setStoredData(data);
  });

  return { storedData, getItem, setItem };
};
