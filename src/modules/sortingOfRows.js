import {compareItems} from "@tanstack/match-sorter-utils";
import {sortingFns} from "@tanstack/react-table";

export function sortingOfRows(rowA, rowB, columnId) {
    let dir = 0

    // Only sort by ranking the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
        dir = compareItems(
            rowA.columnFiltersMeta[columnId],
            rowB.columnFiltersMeta[columnId]
        )
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir
}