"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

interface NavigateButtonProps {
    to: string;
    children: React.ReactNode;
}

export default function NavigateButton({ to, children }: NavigateButtonProps) {
    const router = useRouter();

    return (
        <Button onClick={() => router.push(to)}>
            {children}
        </Button>
    );
}
