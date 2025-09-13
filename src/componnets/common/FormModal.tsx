import React from "react";
import type { FormModalProps } from "../../types/popup";
import Modal from "../ui/Modal";
import Form from "../todoList/form/Form";

const FormModal: React.FC<FormModalProps> = ({ isShown, onSubmit, onEdit, onClose, data }) => {
  return (
    <Modal isShown={isShown} onClose={onClose}>
      <div className="flex flex-col bg-white rounded shadow py-8 px-6 border border-gold-200">
        <h2 className="font-bold">{data ? "Edit Task" : "Add New Task"}</h2>
        <Form onSubmit={onSubmit} data={data} onEdit={onEdit} />
      </div>
    </Modal>
  );
};

export default FormModal;
