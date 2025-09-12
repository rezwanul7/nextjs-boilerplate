"use client"

import Link from "next/link"

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

    return (
        <div className="flex items-center gap-4 mt-4">
            {page > 1 && (
                <Link
                    href={`?page=${page - 1}&perPage=${perPage}`}
                    className="px-3 py-1 border rounded"
                >
                    Previous
                </Link>
            )}

            <span>
        Page {page} of {totalPages}
      </span>

            {page < totalPages && (
                <Link
                    href={`?page=${page + 1}&perPage=${perPage}`}
                    className="px-3 py-1 border rounded"
                >
                    Next
                </Link>
            )}
        </div>
    )
}
