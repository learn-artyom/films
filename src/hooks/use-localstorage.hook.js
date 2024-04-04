import { useState, useEffect } from "react";

export function useLocalStorage(key) {
  const [data, setData] = useState();

  useEffect(() => {
    const value = JSON.parse(localStorage.getItem(key));

    if (value) {
      setData(value);
    }
  }, [key]);

  const saveData = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setData(value);
  };

  return [data, saveData];
}
