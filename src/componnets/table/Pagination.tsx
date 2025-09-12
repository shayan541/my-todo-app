import React from "react";

const Pagination: React.FC<{
  rowsPerPageOptions?: number[];
  rowsPerPage: number;
  setRowsPerPage: (i: number) => void;
  setCurrentPage: (i: number) => void;
  goToPage: (page: number) => void;
  currentPage: number;
  totalPages: number;
}> = ({ rowsPerPageOptions, rowsPerPage, setRowsPerPage, currentPage, setCurrentPage, goToPage, totalPages }) => {
  return (
    <div className="flex justify-between flex-row-reverse mt-4">
      <div>
        <label className="mr-2 text-sm">Rows per page:</label>
        <select
          className="border rounded px-2 py-1 shadow"
          value={rowsPerPage}
          onChange={(e) => {
            setRowsPerPage(Number(e.target.value));
            setCurrentPage(1); // return to first page after number of rows per page changed
          }}
        >
          {rowsPerPageOptions!.map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center space-x-2">
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
        >
          Prev
        </button>
        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-2 py-1 border rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
