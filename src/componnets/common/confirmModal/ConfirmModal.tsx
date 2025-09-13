import React from "react";
import Modal from "../../ui/Modal";
import QuestionPopOp from "./QuestionPopOp";
import type { ConfirmModalProps } from "../../../types/popup";

const ConfirmModal: React.FC<ConfirmModalProps> = ({ cancelHandler, isShown, question, title, yesHandler, onClose }) => {
  // this modal give two option to client
  return (
    <Modal isShown={isShown} onClose={onClose}>
      <QuestionPopOp cancelHandler={cancelHandler} yesHandler={yesHandler} question={question} title={title} />
    </Modal>
  );
};

export default ConfirmModal;
