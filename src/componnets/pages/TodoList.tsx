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
  const [showEditFormModal, setShowEditFormModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<null | number>();
  const [selectedDataIndex, setSelectedDataIndex] = useState<null | number>();
  const columns: string[] = ["ID", "Title", "Category", "Completed", "Priority", ""];

  const addNewTaskHandler = (data: Data) => {
    setTasks((prev) => {
      const newId = prev.length > 0 ? Math.max(...prev.map((t) => Number(t.id))) + 1 : 1;
      const newTasks = [...prev, { ...data, id: newId }];
      console.log(newTasks);
      localStorage.setItem("tasks", JSON.stringify(newTasks));
      return newTasks;
    });
    setShowFormModal(false);
  };

  const editHandler = (data: Data) => {
    const copiedArray = [...tasks];
    copiedArray[selectedDataIndex!] = data;
    localStorage.setItem("tasks", JSON.stringify(copiedArray));
    setTasks(copiedArray);
    setShowEditFormModal(false);
  };

  const deleteRow = (id: number) => {
    setShowDeleteModal(false);
    const newArray = [...tasks];
    const targetIndex = tasks.findIndex((task) => task.id === id);
    newArray.splice(targetIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(newArray));
    setTasks(newArray);
  };
  const editRow = (id: number) => {
    console.log(id);
    const targetTask = tasks.findIndex((task) => task.id === id);
    setSelectedDataIndex(targetTask);
    setShowEditFormModal(true);
  };

  return (
    <div>
      <h1 className="uppercase">to do list</h1>
      <div className="flex flex-row-reverse">
        <Button onClick={() => setShowFormModal(true)}> add new task</Button>
      </div>
      <div className="mt-4">
        <Table
          columns={columns}
          data={tasks}
          deleteHandler={(id) => {
            setShowDeleteModal(true);
            setSelectedTaskId(id);
          }}
          editHandler={editRow}
        />
      </div>

      <ConfirmModal
        cancelHandler={() => setShowDeleteModal(false)}
        yesHandler={() => {
          deleteRow(selectedTaskId!);
        }}
        question="Do You Really Want To Remove This Task ?"
        title="Delete"
        isShown={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />
      <FormModal isShown={showFormModal} onSubmit={addNewTaskHandler} onClose={() => setShowFormModal(false)} />
      <FormModal
        isShown={showEditFormModal}
        onSubmit={addNewTaskHandler}
        onClose={() => setShowEditFormModal(false)}
        data={tasks[selectedDataIndex!]}
        onEdit={editHandler}
      />
    </div>
  );
};

export default TodoList;
