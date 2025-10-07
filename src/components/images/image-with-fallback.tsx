"use client";

import {useState} from "react";
import Image, {ImageProps} from "next/image";

interface ImageWithFallbackProps extends ImageProps {
    fallbackSrc?: string;
}

/*
 * Image component that falls back to a placeholder image if the main image fails to load.
 *
 * Example usage:
 *   <ImageWithFallback
 *     src="/uploads/user-avatar.png"
 *     alt="User avatar"
 *     width={64}
 *     height={64}
 *     className="rounded-full object-cover"
 *   />
 */
export function ImageWithFallback({
                                      src,
                                      alt,
                                      fallbackSrc = "/placeholder.svg",
                                      ...props
                                  }: ImageWithFallbackProps) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc || fallbackSrc}
            alt={alt}
            onError={() => setImgSrc(fallbackSrc)}
        />
    );
}
