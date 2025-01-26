import React, { createContext, useContext, useState } from "react";
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

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-[9999]">
          <div className=" rounded-lg p-4">
            <Spinner size="large" />
          </div>
        </div>
      )}
    </LoadingContext.Provider>
  );
};
