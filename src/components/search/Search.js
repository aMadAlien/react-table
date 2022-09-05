import React, {useState} from "react";
import {FilterFn} from "@tanstack/react-table";

const Search = ({table, Filter}) =>{
    return (
        <div className="search__input">
            {table.getHeaderGroups().map(headerGroup =>
                headerGroup.headers.map(header =>
                    header.isPlaceholder ? null : (
                        header.column.getCanFilter() && header.column.id === "status" ? (
                            <div>
                                <Filter column={header.column} table={table}/>
                            </div>
                        ) : null
                    )
                )
            )}
        </div>
    )
}

export default Search;