"use client";

import Image from "next/image";
import React, {useState} from "react";

interface AvatarWithFallbackProps {
    imageUrl?: string | null;
    initials: string;
    size?: number; // default 48px (12 * 4)
    alt?: string;
}

export const AvatarWithFallback: React.FC<AvatarWithFallbackProps> = (
    {
        imageUrl,
        initials,
        size = 48,
        alt = "User avatar",
    }) => {
    const [hasError, setHasError] = useState(false);

    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        console.error(
            `[AvatarWithFallback] Failed to load image: "${imageUrl}" — using fallback.`,
            event
        );
        setHasError(true);
    };

    const shouldShowFallback = !imageUrl || hasError;

    if (shouldShowFallback) {
        return (
            <div
                className="rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg"
                style={{width: size, height: size}}
            >
                <span className="text-sm font-bold text-white">{initials}</span>
            </div>
        );
    }

    return (
        <div
            className="rounded-full overflow-hidden shadow-md"
            style={{width: size, height: size}}
        >
            <Image
                src={imageUrl}
                alt={alt}
                width={size}
                height={size}
                className="object-cover w-full h-full"
                onError={handleError}
            />
        </div>
    );
};