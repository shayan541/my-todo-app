import React, { useState } from "react";
import { Snackbar, SnackbarContent } from "@mui/material";
import { SnackbarContext, type SnackbarState } from "./SnackbarContext";

type Props = {
  children: React.ReactNode;
};

export const SnackbarProvider: React.FC<Props> = ({ children }) => {
  const [snack, setSnack] = useState<SnackbarState>({
    showSnack: false,
    message: "",
    hasError: false,
  });

  const showSnackbar = (message: string, hasError: boolean = false) => {
    setSnack({ showSnack: true, message, hasError });
  };

  const handleClose = () => setSnack((prev) => ({ ...prev, showSnack: false }));

  return (
    <SnackbarContext.Provider value={{ showSnackbar }}>
      {children}
      <Snackbar
        open={snack.showSnack}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
      >
        <SnackbarContent
          message={<p>{snack.message}</p>}
          style={{
            backgroundColor: snack.hasError ? "#db4d67" : "#2cb790",
            color: "#fff",
            fontSize: "16px",
            fontFamily: "'Open Sans', sans-serif",
            fontWeight: 100,
          }}
        />
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
