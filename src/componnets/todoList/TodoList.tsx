import { useState } from "react";
import Button from "../ui/Button";
import ConfirmModal from "../ui/modals/ConfirmModal";
import FormModal from "../ui/modals/FormModal";
import type { Data } from "../../types/table";
import Table from "./table/Table";
import { useSnackbarContext } from "../../store/context/SnackbarContext";
import { columns } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/redux";
import { addTask, deleteTask, editTask } from "../../store/redux/todoSlice";

const TodoList = () => {
  const tasks = useSelector((state: RootState) => state.todo.tasks);
  const dispatch = useDispatch<AppDispatch>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [showEditFormModal, setShowEditFormModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState<null | number>();
  const [selectedDataIndex, setSelectedDataIndex] = useState<null | number>();
  const { showSnackbar } = useSnackbarContext();

  const addNewTaskHandler = (task: Omit<Data, "id">) => {
    dispatch(addTask(task));
    setShowFormModal(false);
    showSnackbar("Task Added Successfully.", false);
  };

  const editHandler = (task: Data) => {
    dispatch(editTask(task));
    setShowEditFormModal(false);
    showSnackbar("Task Edited Successfully.", false);
  };

  const deleteRow = (id: number) => {
    dispatch(deleteTask(id));
    setShowDeleteModal(false);
    showSnackbar("Task Deleted Successfully.", false);
  };
  const editRow = (id: number) => {
    const targetTask = tasks.findIndex((task) => task.id === id);
    setSelectedDataIndex(targetTask);
    setShowEditFormModal(true);
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between flex-wrap items-center font-bold gap-3">
        <h2 className="uppercase">to do list</h2>
        <div className="flex flex-row-reverse">
          <Button onClick={() => setShowFormModal(true)}> add new task</Button>
        </div>
      </div>
      <div className="mt-12 mb-36">
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
      {/* this modal is for deleting */}
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
      {/* this modal is for adding new task */}
      <FormModal isShown={showFormModal} onSubmit={addNewTaskHandler} onClose={() => setShowFormModal(false)} />
      {/* this modal is for editing */}
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
