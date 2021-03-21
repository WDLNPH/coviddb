import React from 'react';
import {useTable, useSortBy, useFilters} from "react-table";

export default function Table({columns, data}) {
    // const [filterInput, setFilterInput] = useState("");

    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        // setFilter
    } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useSortBy // This plugin Hook will help to sort our table columns
    );

    // Update the state when input changes
    /*const handleFilterChange = e => {
        const value = e.target.value || undefined;
        // setFilter("show.name", value);
        // setFilterInput(value);
    };*/

    /*
      Render the UI for your table
      - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
    */
    return (
        <table className="table table-striped" {...getTableProps()}>
            <thead>
            {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                        <th
                            {...column.getHeaderProps(column.getSortByToggleProps())}
                            className={
                                column.isSorted
                                    ? column.isSortedDesc
                                    ? "sort-desc"
                                    : "sort-asc"
                                    : ""
                            }
                        >
                            {column.render("Header")}
                        </th>
                    ))}
                </tr>
            ))}
            </thead>
            <tbody {...getTableBodyProps()}>
            {rows.map((row, i) => {
                prepareRow(row);
                return (
                    <tr {...row.getRowProps()}>
                        {row.cells.map(cell => {
                            return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
