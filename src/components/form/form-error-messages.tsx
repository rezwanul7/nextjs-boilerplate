"use client"

import * as React from "react"
import { FieldError } from "react-hook-form"
import { cn } from "@/lib/utils"

interface FormErrorMessagesProps extends React.HTMLAttributes<HTMLDivElement> {
    error?: FieldError | null
    className?: string
}

export function FormErrorMessages({ error, className, ...props }: FormErrorMessagesProps) {
    if (!error) return null

    const messages = error.types
        ? Object.values(error.types) // multiple messages per field
        : error.message
            ? [error.message] // single message
            : []

    if (!messages.length) return null

    return (
        <div className={cn("text-sm text-destructive space-y-1", className)} {...props}>
            {messages.map((msg, idx) => (
                <p key={idx}>{msg}</p>
            ))}
        </div>
    )
}
