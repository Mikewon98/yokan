import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getPaginationRowModel,
  getFilteredRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";
import "./TableComponents.css";

const TableComponents = ({ columns, data, tableClassName }) => {
  const [sorting, setSorting] = useState([]);
  const [filtering, setFiltering] = useState("");

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  return (
    <>
      <div className='table-search-main'>
        <div className='table-search'>
          <input
            type='text'
            placeholder='Search here'
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
          />
        </div>
        <div className='table-pagination'>
          <p>Page: {table.getState().pagination.pageIndex + 1}</p>
        </div>
      </div>
      <div className={tableClassName}>
        <table className='main-table'>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {
                      {
                        asc: (
                          <i className='fa-solid fa-up-long sortingArrow'></i>
                        ),
                        desc: (
                          <i className='fa-solid fa-down-long sortingArrow'></i>
                        ),
                      }[header.column.getIsSorted() ?? null]
                    }
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='table-buttons'>
        <button onClick={() => table.setPageIndex(0)}> {"<<"}</button>
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
        >
          {"<"}
        </button>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
        >
          {">"}
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)}>
          {">>"}
        </button>
      </div>
    </>
  );
};

export default TableComponents;
