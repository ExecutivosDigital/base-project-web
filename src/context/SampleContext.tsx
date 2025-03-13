"use client";

import { createContext, useContext } from "react";
import { useCookies } from "next-client-cookies";

interface SampleContextProps {
  // states that will be exported
}

const SampleContext = createContext<SampleContextProps | undefined>(undefined);

interface ProviderProps {
  children: React.ReactNode;
}

export const SampleContextProvider = ({ children }: ProviderProps) => {
  const cookies = useCookies();

  return (
    <SampleContext.Provider
      value={
        {
          // states that will be exported
        }
      }
    >
      {children}
    </SampleContext.Provider>
  );
};

export function useSampleContext() {
  const context = useContext(SampleContext);
  if (!context) {
    throw new Error(
      "useSampleContext deve ser usado dentro de um SampleContextProvider",
    );
  }
  return context;
}
