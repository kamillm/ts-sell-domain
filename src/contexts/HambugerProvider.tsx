import type { PropsWithChildren } from "react";
import { createContext, useContext, useMemo, useState } from "react";

export const HambugerContext = createContext({
  isHambuger: false,
  setHambuger: (value: boolean) => {
    value;
  }
});

export function HambugerProvider({ children }: PropsWithChildren) {
  const [isHambuger, setHambuger] = useState(false);

  const hambuger = useMemo(
    () => ({
      isHambuger,
      setHambuger
    }),
    [isHambuger]
  );

  return <HambugerContext.Provider value={{ ...hambuger }}>{children}</HambugerContext.Provider>;
}

export const useHambuger = () => {
  return useContext(HambugerContext);
};

export default HambugerProvider;
