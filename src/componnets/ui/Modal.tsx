import React from "react";

const Modal: React.FC<{ children: React.ReactNode; isShown: boolean }> = ({ children, isShown }) => {
  return <>{isShown ? <div className="fixed inset-0 bg-black bg-opacity-70 z-30 flex justify-center items-center">{children}</div> : <></>}</>;
};

export default Modal;
