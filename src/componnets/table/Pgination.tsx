import type { Table } from "@tanstack/react-table";
import React from "react";
import type { Data } from "../../types/table";

const Pgination: React.FC<{ className?: string; table: Table<Data> }> = ({ className, table }) => {
  return (
    <div className={`${className ?? className} flex justify-end`}>
      <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
        قبلی
      </button>
      <span style={{ margin: "0 10px" }}>
        صفحه {table.getState().pagination.pageIndex + 1} از {table.getPageCount()}
      </span>
      <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
        بعدی
      </button>

      {/* select number of rows*/}
      <select
        value={table.getState().pagination.pageSize}
        onChange={(e) => table.setPageSize(Number(e.target.value))}
        style={{ marginLeft: "10px" }}
      >
        {[2, 3, 5, 10].map((size) => (
          <option key={size} value={size}>
            {size} در هر صفحه
          </option>
        ))}
      </select>
    </div>
  );
};

export default Pgination;
