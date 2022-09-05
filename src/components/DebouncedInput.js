// A debounced input react component
import React, {useEffect, useState, useMemo} from "react";

function DebouncedInput({
                            value: initialValue,
                            onChange,
                            debounce = 500,
                            table,
                            ...props
                        }) {
    const [value, setValue] = useState(initialValue)
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])


    const STATUS_INDEX = 5;
    const arrayOfPeopleObj = useMemo(() =>table.getRowModel().rows.map(row => row.original), []);
    const arrayOfPeopleArr = arrayOfPeopleObj.map(item => Object.values(item));
    const statuses = [...(new Set(arrayOfPeopleArr.map(a => a[STATUS_INDEX])))];

    return (
        <>
            <select {...props} value={value} onChange={e => setValue(e.target.value)}>
                <option value="">All</option>
                {statuses.map((item, idx) => (
                    <option key={idx} value={item}>{item}</option>
                ))}
            </select>
        </>
    )
}
export  default DebouncedInput;