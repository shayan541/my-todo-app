import React from "react";
import type { Data } from "../../../types/table";
import TableMenu from "../TableMenu";
import RowItem from "./RowItem";

const Row: React.FC<{ task: Data; editHandler: (id: number) => void; deleteHandler: (id: number) => void }> = ({
  task,
  deleteHandler,
  editHandler,
}) => {
  return (
    <tr className="border-b" key={task.id}>
      <RowItem className="sticky left-0 z-10 bg-white">{task.id}</RowItem>
      <RowItem>{task.title}</RowItem>
      <RowItem>{task.category}</RowItem>
      <RowItem>{task.completed ? "✅" : "❌"}</RowItem>
      <RowItem>{task.priority}</RowItem>
      <RowItem className="flex justify-end items-center">
        <TableMenu deleteHandler={() => deleteHandler(task.id)} editHandler={() => editHandler(task.id)} />
      </RowItem>
    </tr>
  );
};

export default Row;
