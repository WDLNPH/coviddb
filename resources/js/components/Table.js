import React from 'react';
import {useTable} from "react-table";

export default function Table({columns, data}) {
    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable(
        {
            columns,
            data
        }
    );
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
