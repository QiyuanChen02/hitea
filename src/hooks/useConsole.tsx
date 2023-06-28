import { useEffect } from "react";

export const useConsole = (variable: unknown, log: string) => {
  useEffect(() => {
    console.log(variable, log);
  }, [variable, log]);
};
