import { SampleContextProvider } from "./SampleContext";

export function ContextProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SampleContextProvider>
        {/* Any other Context Providers */}
        {children}
        {/* Any other Context Providers */}
      </SampleContextProvider>
    </>
  );
}
