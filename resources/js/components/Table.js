import React from 'react';
import {useTable} from "react-table";
import {useHistory} from "react-router";



export default function Table({columns, data, onClick}) {
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
    const history = useHistory();
    return (
        <div className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative">
            <table className="border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative" {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr className="text-left" {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th
                                    className="bg-gray-100 sticky top-0 border-b border-gray-200 px-6 py-2 text-gray-600 font-bold tracking-wider uppercase text-xs"
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
                        <tr onClick={() => onClick ? onClick(row.original) : null} {...row.getRowProps()} className="hover:bg-gray-200 hover:cursor-pointer">
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        className="border-dashed border-t border-gray-200"
                                        {...cell.getCellProps()}>
                                        <span className="text-gray-700 px-6 py-3 flex items-center">
                                            {cell.render("Cell")}
                                        </span>
                                    </td>
                                );
                            })}
                        </tr>
                    );
                })}
                </tbody>
            </table>
        </div>
    );
}
