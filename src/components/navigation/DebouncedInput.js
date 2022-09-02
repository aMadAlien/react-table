// A debounced input react component
import React, {useMemo} from "react";

function DebouncedInput({
                            value: initialValue,
                            onChange,
                            debounce = 500,
                            table,
                            ...props
                        }) {
    const [value, setValue] = React.useState(initialValue)

    React.useEffect(() => {
        setValue(initialValue)
    }, [initialValue])

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            onChange(value)
        }, debounce)

        return () => clearTimeout(timeout)
    }, [value])

    const stat = useMemo(() => table.getRowModel().rows.map(row => row.original.rel_status), []);
    const statuses = [...(new Set(stat))];
    console.log(table.getHeaderGroups()[2].headers[5], table.getRowModel().rows.map(row => row.original))

    return (
        <>
            <select {...props} value={value} onChange={e => setValue(e.target.value)}>
                <option value="">All</option>
                {statuses.map((item, idx) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>
        </>
    )
}
export  default DebouncedInput;