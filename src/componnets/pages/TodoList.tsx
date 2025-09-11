import React, { useState } from "react";
import Button from "../ui/Button";
import ConfirmModal from "../ui/ConfirmModal";
import FormModal from "../ui/FormModal";
import type { Data } from "../../types/table";

const TodoList = () => {
  // const data: Data[] = [
  //   { id: 1, title: "write", category: "Personal", completed: false, priority: "High" },
  //   { id: 2, title: "read", category: "Personal", completed: true, priority: "Low" },
  //   { id: 3, title: "maghaze", category: "Shopping", completed: false, priority: "Medium" },
  //   { id: 4, title: "react", category: "Work", completed: true, priority: "Low" },
  //   { id: 5, title: "next", category: "Work", completed: false },
  // ];
  const localData = localStorage.getItem("tasks");
  const data: Data[] = localData ? JSON.parse(localData) : [];
  const [tasks, setTasks] = useState(data);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const columns: string[] = ["ID", "Title", "Category", "Completed", "Priority"];

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
        <table className="w-full border-collapse table-fixed">
          <thead>
            <tr>
              {columns.map((col) => (
                <th className="border-b py-2 text-sm font-normal text-gray tracking-wider bg-red-200 text-left pl-4">{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr className="border-b" key={task.id}>
                <td className=" px-4 py-2">{task.id}</td>
                <td className=" px-4 py-2">{task.title}</td>
                <td className=" px-4 py-2">{task.category}</td>
                <td className=" px-4 py-2">{task.completed}</td>
                <td className=" px-4 py-2">{task.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ConfirmModal
        cancelHandler={() => setShowDeleteModal(false)}
        yesHandler={() => {}}
        question="Do You Really Want To Remove This Task ?"
        title="Delete"
        isShown={showDeleteModal}
      />
      <FormModal isShown={showFormModal} onSubmit={addNewTaskHandler} />
    </div>
  );
};

export default TodoList;
