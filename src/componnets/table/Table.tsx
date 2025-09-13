import React, { useState } from "react";
import type { TableProps } from "../../types/table";
import Row from "./Row";
import Pagination from "./Pagination";

const Table: React.FC<TableProps> = ({ columns, data, deleteHandler, editHandler, rowsPerPageOptions = [5, 10, 20] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions![0]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const displayedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse table-fixed min-w-[600px] mb-20">
          <thead>
            <tr className=" rounded">
              {columns.map((col, i) => (
                <th
                  key={col}
                  className={`border-b py-4 text-sm font-semibold text-gray tracking-wider text-left pl-4 bg-[#b29b66] ${
                    i == 0 ? "sticky left-0 z-20 " : ""
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayedData.map((task) => (
              <Row task={task} key={task.id} deleteHandler={deleteHandler} editHandler={editHandler} />
            ))}
          </tbody>
        </table>
      </div>
      {/*pagination */}
      <Pagination
        rowsPerPageOptions={rowsPerPageOptions}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        currentPage={currentPage}
        goToPage={goToPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default Table;
