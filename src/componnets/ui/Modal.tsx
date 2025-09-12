import React from "react";
import type { ModalProps } from "../../types/popup";

const Modal: React.FC<ModalProps> = ({ children, isShown, onClose }) => {
  return (
    <>
      {isShown ? (
        <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-70 z-30 flex justify-center items-center">
          <div onClick={(e) => e.stopPropagation()}>{children}</div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
