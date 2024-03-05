import type { PropsWithChildren } from "react";
import { createContext, useContext, useMemo, useState } from "react";

export const CreditContext = createContext({
  creditValue: 0,
  setCreditValue: (value: number) => {
    value;
  }
});

export function CreditProvider({ children }: PropsWithChildren) {
  const [creditValue, setCreditValue] = useState<number>(12);

  const data = useMemo(
    () => ({
      creditValue,
      setCreditValue
    }),
    [creditValue]
  );

  return <CreditContext.Provider value={{ ...data }}>{children}</CreditContext.Provider>;
}

export const useCredit = () => {
  return useContext(CreditContext);
};

export default CreditProvider;
