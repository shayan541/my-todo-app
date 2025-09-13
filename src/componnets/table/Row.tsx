import React from "react";
import type { Data } from "../../types/table";
import TableMenu from "./TableMenu";

const Row: React.FC<{ task: Data; editHandler: (id: number) => void; deleteHandler: (id: number) => void }> = ({
  task,
  deleteHandler,
  editHandler,
}) => {
  return (
    <tr className="border-b " key={task.id}>
      <td className="sticky left-0 z-10 bg-white px-4 py-2">{task.id}</td>
      <td className=" px-4 py-2">{task.title}</td>
      <td className=" px-4 py-2">{task.category}</td>
      <td className=" px-4 py-2">{task.completed ? "✅" : "❌"}</td>
      <td className=" px-4 py-2">{task.priority}</td>
      <td className="flex justify-end items-center py-2">
        <TableMenu deleteHandler={() => deleteHandler(task.id)} editHandler={() => editHandler(task.id)} />
      </td>
    </tr>
  );
};

export default Row;
