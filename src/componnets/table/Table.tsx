import React from "react";
import type { TableProps } from "../../types/table";
import Row from "./Row";

const Table: React.FC<TableProps> = ({ columns, data, deleteHandler, editHandler }) => {
  return (
    <table className="w-full border-collapse table-fixed">
      <thead>
        <tr className="bg-[#b29b66] rounded">
          {columns.map((col) => (
            <th key={col} className="border-b py-2 text-sm font-normal text-gray tracking-wider  text-left pl-4 ">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((task) => (
          <Row task={task} key={task.id} deleteHandler={deleteHandler} editHandler={editHandler} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
