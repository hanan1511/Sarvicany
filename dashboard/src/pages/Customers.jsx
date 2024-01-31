import React from 'react';
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";
import Header from '../components/Header.jsx';

const Customers = () => {
  const data = React.useMemo(
    () => [
      { id: 1, name: "John Doe", age: 25 },
      { id: 2, name: "Jane Smith", age: 30 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "Bob Johnson", age: 22 },
      { id: 3, name: "zob Johnson", age: 22 },
      { id: 3, name: "zob Johnson", age: 22 },
      { id: 3, name: "zob Johnson", age: 22 },
      { id: 3, name: "zob Johnson", age: 22 },
      { id: 3, name: "zob Johnson", age: 22 },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      { Header: "ID", accessor: "id" },
      { Header: "Name", accessor: "name" },
      { Header: "Age", accessor: "age", sortType: "basic" },
      {
        Header: "Actions",
        accessor: "actions",
        Cell: (row) => (
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <button
              onClick={() => handleAccept(row.row.original)}
              className="btn btn-success"
            >
              Accept
            </button>
            <button
              onClick={() => handleDelete(row.row.original.id)}
              className="btn btn-danger"
            >
              Delete
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const handleAccept = (data) => {
    // Implement your logic for accepting here
    console.log("Accepted:", data);
  };

  const handleDelete = (id) => {
    // Implement your logic for deleting here
    console.log("Deleted:", id);
  };
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    state,
    setGlobalFilter,
    page,
    pageOptions,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    gotoPage,
    pageCount,
    setPageSize, // Function to set page size
    pageSize,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, usePagination);

  const { globalFilter, pageIndex } = state;
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div className="container-fluid mt-4">
      <div className="mb-3 d-flex justify-content-between">
        <input
          type="text"
          value={globalFilter || ""}
          onChange={(e) => setGlobalFilter(e.target.value)}
          placeholder="Search table..."
          className="form-control"
        />
      </div>

      <table {...getTableProps()} className="table table-bordered">
        <thead className="thead-light">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  style={{
                    cursor: "pointer",
                  }}
                  className="text-center"
                >
                  {column.render("Header")}
                  <span className="ml-1">
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " 🔽"
                        : " 🔼"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} style={{ textAlign: "center" }}>
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="mt-3 d-flex justify-content-between">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="btn btn-outline-secondary"
        >
          {"<< First"}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="btn btn-outline-secondary"
        >
          {"< Previous"}
        </button>
        <span>
          Page {pageIndex + 1} of {pageOptions.length}
        </span>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="btn btn-outline-secondary"
        >
          {"Next >"}
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className="btn btn-outline-secondary"
        >
          {"Last >>"}
        </button>
      </div>
      <div className="d-flex align-items-center">
        <span className="mr-2">Rows per page:</span>
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            gotoPage(0);
          }}
          className="form-control w-25"
        >
          {[3, 5, 10, 15, 20].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
    </div>  
    </div>
  );
};

export default Customers;
