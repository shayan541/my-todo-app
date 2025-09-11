import React from "react";
import Modal from "./Modal";
import QuestionPopOp from "./QuestionPopOp";
import type { ConfirmModalProps } from "../../types/popup";

const ConfirmModal: React.FC<ConfirmModalProps> = ({ cancelHandler, isShown, question, title, yesHandler }) => {
  return (
    <Modal isShown={isShown}>
      <QuestionPopOp cancelHandler={cancelHandler} yesHandler={yesHandler} question={question} title={title} />
    </Modal>
  );
};

export default ConfirmModal;
