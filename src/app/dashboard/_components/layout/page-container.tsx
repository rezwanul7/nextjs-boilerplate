"use client"

import {cn} from "@/lib/utils";

export function PageContainer({children, className}: {
    children: React.ReactNode
    className?: string,
}) {
    return (
        <main className={cn("flex flex-1 flex-col @container/main", className || "p-4 md:p-6")}>
            {children}
        </main>
    )
}
