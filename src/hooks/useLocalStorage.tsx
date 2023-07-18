import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useConsole } from "./useConsole";

/** Similar to useState but storing the state in localStorage */
export const useLocalStorage = <T,>(intialValue: T, key: string) => {
  const router = useRouter();
  const queries = router.query;

  const [value, setValue] = useState<T>(intialValue);

  useEffect(() => {
    if (queries[key] && typeof queries[key] === "string") {
      setValue((queries[key] as string).split(",") as T);
    } else {
      const item = localStorage.getItem(key);
      if (item) {
        setValue(JSON.parse(item) as T);
      }
    }
  }, [key, queries]);

  return value;
};
