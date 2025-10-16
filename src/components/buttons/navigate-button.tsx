"use client";

import { useRouter } from "next/navigation";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { VariantProps } from "class-variance-authority";

interface NavigateButtonProps
    extends React.ComponentProps<"button">,
        VariantProps<typeof buttonVariants> {
    to: string;
    children: React.ReactNode;
    className?: string;
}

/**
 * NavigateButton
 * - Wrapper around your custom <Button> with router.push() navigation.
 * - Fully compatible with your buttonVariants (variant + size).
 */
export default function NavigateButton({
                                           to,
                                           children,
                                           variant,
                                           size,
                                           className,
                                           ...props
                                       }: NavigateButtonProps) {
    const router = useRouter();

    return (
        <Button
            onClick={() => router.push(to)}
            variant={variant}
            size={size}
            className={cn(className)}
            {...props}
        >
            {children}
        </Button>
    );
}