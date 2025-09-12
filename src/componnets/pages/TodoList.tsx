import React, { useState } from "react";
import Button from "../ui/Button";
import ConfirmModal from "../ui/ConfirmModal";
import FormModal from "../ui/FormModal";
import type { Data } from "../../types/table";
import Table from "../table/Table";

const TodoList = () => {
  const localData = localStorage.getItem("tasks");
  const data: Data[] = localData ? JSON.parse(localData) : [];
  const [tasks, setTasks] = useState(data);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const columns: string[] = ["ID", "Title", "Category", "Completed", "Priority", ""];

  const addNewTaskHandler = (data: Data) => {
    setTasks((prev) => {
      const newId = prev.length > 0 ? Math.max(...prev.map((t) => t.id)) + 1 : 1;
      const newTasks = [...prev, { ...data, id: newId }];
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
    setShowFormModal(false);
  };

  return (
    <div>
      <h1 className="uppercase">to do list</h1>
      <div className="flex flex-row-reverse">
        <Button onClick={() => setShowFormModal(true)}> add new task</Button>
      </div>
      <div className="mt-4">
        <Table columns={columns} data={tasks} />
      </div>

      <ConfirmModal
        cancelHandler={() => setShowDeleteModal(false)}
        yesHandler={() => {}}
        question="Do You Really Want To Remove This Task ?"
        title="Delete"
        isShown={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />
      <FormModal isShown={showFormModal} onSubmit={addNewTaskHandler} onClose={() => setShowFormModal(false)} />
    </div>
  );
};

export default TodoList;
