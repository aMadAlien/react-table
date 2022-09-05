import React, {useMemo} from "react";
import {compareItems} from "@tanstack/match-sorter-utils";
import {sortingFns} from "@tanstack/react-table";

const fuzzySort = (rowA, rowB, columnId) => {
    let dir = 0

    // Only sort by ranking the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId]?.itemRank,
            rowB.columnFiltersMeta[columnId]?.itemRank
        )
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}

const Table = ({PAGE_NUMBER}) => {
    return useMemo(
        () => [
            {
                header: `Name ${PAGE_NUMBER}`,
                footer: props => props.column.id,
                columns: [
                    {
                        accessorKey: 'firstName',
                        cell: info => info.getValue(),
                        footer: props => props.column.id,
                    },
                    {
                        accessorFn: row => row.lastName,
                        id: 'lastName',
                        cell: info => info.getValue(),
                        header: () => <span>Last Name</span>,
                        footer: props => props.column.id,
                    },
                    {
                        accessorFn: row => `${row.firstName} ${row.lastName}`,
                        id: 'fullName',
                        header: 'Full Name',
                        cell: info => info.getValue(),
                        footer: props => props.column.id,
                        filterFn: 'fuzzy',
                        sortingFn: fuzzySort,
                    },
                ],
            },
            {
                header: `Info ${PAGE_NUMBER}`,
                footer: props => props.column.id,
                columns: [
                    {
                        accessorKey: 'age',
                        header: () => 'Age',
                        footer: props => props.column.id,
                    },
                    {
                        header: 'More Info',
                        columns: [
                            {
                                accessorKey: 'visits',
                                header: () => <span>Visits</span>,
                                footer: props => props.column.id,
                            },
                            {
                                // accessorKey: 'status',
                                accessorFn: row => row.relationship_status,
                                id: 'status',
                                header: 'Status',
                                footer: props => props.column.id,
                            },
                            {
                                accessorKey: 'progress',
                                header: 'Profile Progress',
                                footer: props => props.column.id,
                            },
                        ],
                    },
                ],
            },
        ],
        []
    )
}

export default Table;