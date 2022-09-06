import Table from "../components/Table";
import makeData from "../makeData";
import React, {useMemo} from "react";
import {sortingOfRows} from "../modules/sortingOfRows";

const Columns = ({PAGE_NUMBER}) => {
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
                        sortingFn: sortingOfRows,
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

const SecondPage = () => {
    const PAGE_NUMBER = 2;
    const data = makeData(150);
    const columns = Columns({PAGE_NUMBER});
    return (
        <Table makeData={data} columns={columns} />
    )
}

export default SecondPage;