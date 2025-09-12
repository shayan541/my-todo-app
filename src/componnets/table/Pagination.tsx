import React from "react";
import DropDown from "../ui/DropDown";

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
      <div className="flex items-center">
        <label className="mr-2 text-sm">Rows per page:</label>
        <DropDown
          value={rowsPerPage}
          options={rowsPerPageOptions!}
          onChange={(val) => {
            setRowsPerPage(Number(val));
            setCurrentPage(1); // return to first page after number of rows per page changed
          }}
        />
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
