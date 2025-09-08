import { cn } from "@/lib/utils"

interface FormFooterProps {
    children: React.ReactNode
    align?: "left" | "right" | "center" | "between"
    className?: string
}

export function FormFooter({ children, align = "right", className }: FormFooterProps) {
    const alignment = {
        left: "justify-start",
        right: "justify-end",
        center: "justify-center",
        between: "justify-between",
    }[align]

    return (
        <div className={cn("flex gap-2", alignment, className)}>
            {children}
        </div>
    )
}
