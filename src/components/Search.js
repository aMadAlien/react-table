import React, {useState} from "react";

const Search = ({DebouncedInput, globalFilter, setGlobalFilter, table, Filter}) =>{
    const [open, setOpen] = useState(true);

    return (
        // <div>
        //     <select>
        //         <label for="search">Search all...</label>
        //         <option >
        //             search all
        //             <DebouncedInput
        //                 id="search"
        //                 value={globalFilter ?? ''}
        //                 onChange={value => setGlobalFilter(String(value))}
        //                 className="p-2 font-lg shadow border border-block"
        //                 placeholder="Search all columns..."
        //             />
        //
        //         </option>
        //         <option>
        //             <input placeholder="search 2"/>
        //         </option>
        //     </select>
        // </div>


        <div className="search__dropdow-menu">
            <div className="search__input">
                <DebouncedInput
                    value={globalFilter ?? ''}
                    onChange={value => setGlobalFilter(String(value))}
                    className="p-2 font-lg shadow border border-block"
                    placeholder="Search all columns..."
                />
                <button onClick={() => setOpen(!open)}>{open ? ">" : "x"}</button>
            </div>
            <ul className={`menu__def ${open ? "menu__close" : "menu__open"}`}>
                {table.getHeaderGroups().map(headerGroup =>
                    headerGroup.headers.map(header =>
                        header.isPlaceholder ? null : (
                            header.column.getCanFilter() ? (
                                <div>
                                    <Filter column={header.column} table={table}/>
                                </div>
                            ) : null
                        )
                    )
                )}
            </ul>
        </div>
    )
}

export default Search;