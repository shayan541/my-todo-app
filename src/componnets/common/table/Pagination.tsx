import React from "react";
import DropDown from "../../ui/DropDown";
import Button from "../../ui/Button";

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
    <div className="flex md:justify-between justify-center mt-4 flex-wrap gap-10">
      <div className="flex items-center space-x-2">
        <Button
          disabled={currentPage === 1}
          onClick={() => goToPage(currentPage - 1)}
          className="px-2 py-1 border rounded disabled:opacity-50 hover:bg-gold-200 cursor-pointer text-white bg-gold-100"
        >
          Prev
        </Button>
        <span className="text-sm text-black">
          Page {currentPage} of {totalPages}
        </span>
        <Button
          className="px-2 py-1 border rounded disabled:opacity-50 hover:bg-gold-200 cursor-pointer text-white bg-gold-100"
          disabled={currentPage === totalPages}
          onClick={() => goToPage(currentPage + 1)}
        >
          Next
        </Button>
      </div>
      <div className="flex items-center relative z-20">
        <label className="mr-2 text-sm text-black">Rows per page:</label>
        <DropDown
          value={rowsPerPage}
          options={rowsPerPageOptions!}
          onChange={(val) => {
            setRowsPerPage(Number(val));
            setCurrentPage(1); // return to first page after number of rows per page changed
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
