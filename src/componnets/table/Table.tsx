import React, { useEffect, useState } from "react";
import type { TableProps } from "../../types/table";
import Row from "./row/Row";
import Pagination from "./Pagination";
import { rowsPerPageOptionsConstant } from "../../utils/constants";

const Table: React.FC<TableProps> = ({ columns, data, deleteHandler, editHandler }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(Number(localStorage.getItem("selectedNumberOfRows")) || rowsPerPageOptionsConstant[0]);

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const displayedData = data.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  const goToPage = (page: number) => {
    if (page < 1) page = 1;
    else if (page > totalPages) page = totalPages;
    setCurrentPage(page);
  };

  useEffect(() => {
    if (displayedData.length === 0) {
      goToPage(1);
    }
  }, [displayedData]);

  return (
    <div>
      {displayedData.length === 0 ? (
        <p className="text-center">database is empty please add new tasks first.</p>
      ) : (
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
            rowsPerPageOptions={rowsPerPageOptionsConstant}
            rowsPerPage={rowsPerPage}
            setRowsPerPage={(val) => {
              localStorage.setItem("selectedNumberOfRows", val.toString());
              setRowsPerPage(val);
            }}
            currentPage={currentPage}
            goToPage={goToPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      )}
    </div>
  );
};

export default Table;
