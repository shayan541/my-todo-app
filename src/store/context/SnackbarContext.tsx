import { createContext, useContext } from "react";

export interface SnackbarState {
  showSnack: boolean;
  message: string;
  hasError?: boolean;
}

export type SnackbarContextType = {
  showSnackbar: (message: string, hasError?: boolean) => void;
};

export const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined);

export const useSnackbarContext = (): SnackbarContextType => {
  const context = useContext(SnackbarContext);
  if (!context) {
    throw new Error("useSnackbarContext must be used within a SnackbarProvider");
  }
  return context;
};
