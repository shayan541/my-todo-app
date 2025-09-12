import React from "react";
import type { Data } from "../../types/table";

const Row: React.FC<{ task: Data }> = ({ task }) => {
  return (
    <tr className="border-b" key={task.id}>
      <td className=" px-4 py-2">{task.id}</td>
      <td className=" px-4 py-2">{task.title}</td>
      <td className=" px-4 py-2">{task.category}</td>
      <td className=" px-4 py-2">{task.completed ? "✅" : "❌"}</td>
      <td className=" px-4 py-2">{task.priority}</td>
      <td className="cursor-pointer">⚙️</td>
    </tr>
  );
};

export default Row;
