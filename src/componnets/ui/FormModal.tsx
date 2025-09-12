import React from "react";
import Modal from "./Modal";
import type { FormModalProps } from "../../types/popup";
import Form from "./form/Form";

const FormModal: React.FC<FormModalProps> = ({ isShown, onSubmit, onClose }) => {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      <div className="flex flex-col bg-white rounded border shadow py-8 px-6">
        <h2 className="font-bold">Add New Task</h2>
        <Form onSubmit={onSubmit} />
      </div>
    </Modal>
  );
};

export default FormModal;
