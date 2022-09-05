// A debounced input react component
import React, {useEffect, useMemo} from "react";

function DebouncedInput({
                            value: initialValue,
                            onChange,
                            debounce = 500,
                            table,
                            list,
                            ...props
                        }) {
    const [value, setValue] = React.useState(initialValue)
    useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    // const stat = useMemo(() => table.getRowModel().rows.map(row => row.original.status), []);
    // const statuses = [...(new Set(stat))];
    const original = useMemo(() =>table.getRowModel().rows.map(row => row.original), []);
    const originalArrays = original.map(item => Object.values(item));
    const statuses = [...(new Set(originalArrays.map(a => a[5])))];
    console.log(statuses);

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