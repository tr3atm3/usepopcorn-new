import { useEffect, useState } from "react";

export function useLocalStorageState(initalState, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    if (storedValue) return JSON.parse(storedValue);
    return initalState;
  });
  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
