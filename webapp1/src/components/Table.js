import React, {useState} from 'react';
import "../css/generalStyling.css";
import {useTable, useSortBy, useFilters, setFilter} from "react-table";
//import {input} from 'react-dom';



export default function Table({columns, data}) {
    const [filterInput, setFilterInput] = useState("");

// Update the state when input changes
    const handleFilterChange = e => {
        const value = e.target.value || undefined;
        setFilter("show.name", value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
        setFilterInput(value);
    };


    // Use the useTable Hook to send the columns and data to build the table
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        setFilter
    } = useTable(
        {
            columns,
            data
        },
        useFilters,
        useSortBy // This plugin Hook will help to sort our table columns
    );

    /*
      Render the UI for your table
      - react-table doesn't have UI, it's headless. We just need to put the react-table props from the Hooks, and it will do its magic automatically
    */
    return (
        <table {...getTableProps()}>
            <input
                value={filterInput}
                onChange={handleFilterChange}
                placeholder={"Search name"}
            />

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
