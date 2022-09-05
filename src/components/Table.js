import React, {useMemo} from "react";

const Table = ({fuzzySort, num}) => {
    return useMemo(
        () => [
            {
                header: `Name ${num}`,
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
                header: `Info ${num}`,
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