import { useState } from "react";

interface Prop<T> {
  value: T;
  setValue: (value: T) => void;
}

export const useSaveGetData = <T>(key: string, initialValue: T): Prop<T> => {
  const getStorageValue = (): T => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  };

  const [value, setValue] = useState<T>(getStorageValue);

  const setStorageValue = (newValue: T): void => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  return { value, setValue: setStorageValue };
};
