"use client"

import Link from "next/link"
import {Button} from "@/components/ui/button"

export default function Pagination({
                                       page,
                                       perPage,
                                       total,
                                   }: {
    page: number
    perPage: number
    total: number
}) {
    const totalPages = Math.ceil(total / perPage)
    const hasPreviousPage = page > 1
    const hasNextPage = page < totalPages

    return (
        <div
            className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 flex justify-between items-center">
            {/* Page info */}
            <span className="text-sm text-gray-600 dark:text-gray-400">
                Page {page} of {totalPages} &nbsp;·&nbsp; {total} records
            </span>

            {/* Buttons */}
            <div className="space-x-2">
                <Button
                    asChild={hasPreviousPage}
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs text-gray-600 border-gray-300 hover:bg-gray-100 bg-transparent disabled:opacity-50"
                    disabled={!hasPreviousPage}
                >
                    <Link href={`?page=${page - 1}&perPage=${perPage}`} scroll={false}>Previous</Link>
                </Button>

                <Button
                    asChild={hasNextPage}
                    variant="outline"
                    size="sm"
                    className="h-8 px-3 text-xs text-gray-600 border-gray-300 hover:bg-gray-100 bg-transparent disabled:opacity-50"
                    disabled={!hasNextPage}
                >
                    <Link href={`?page=${page + 1}&perPage=${perPage}`} scroll={false}>Next</Link>
                </Button>
            </div>
        </div>
    )
}
