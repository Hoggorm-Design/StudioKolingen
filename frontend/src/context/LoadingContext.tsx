import React, { createContext, useContext, useState, useEffect } from "react";
import Spinner from "../components/shared/Loader/Spinner";

type LoadingContextType = {
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
};

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider");
  }
  return context;
};

export const LoadingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    let timeout: number | undefined;

    if (isLoading) {
      // Start spinner immediately when loading starts
      setShowSpinner(true);
    } else {
      // Add delay before hiding spinner
      timeout = window.setTimeout(() => setShowSpinner(false), 0);
    }

    return () => {
      if (timeout !== undefined) {
        window.clearTimeout(timeout); // Cleanup timeout
      }
    };
  }, [isLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {showSpinner && (
        <div className="fixed inset-0 flex items-center justify-center z-9999 bg-white">
          <div className="rounded-lg p-4">
            <Spinner size="large" />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};
