import Image from "next/image";
import { cn } from "@/lib/utils"; // optional helper for merging classNames

interface PlaceholderImageProps {
    /** Alt text for accessibility */
    alt?: string;
    /** Fixed width for the placeholder (omit for full-cover mode) */
    width?: number;
    /** Fixed height for the placeholder (omit for full-cover mode) */
    height?: number;
    /** Additional Tailwind/utility classes */
    className?: string;
}

/**
 * 🖼️ PlaceholderImage Component
 *
 * Displays a reusable placeholder image stored in `/public/placeholder.svg`.
 *
 * - If `width` and `height` are provided → renders a fixed-size image.
 * - If both are omitted → automatically fills the parent container using `object-cover`.
 *
 * ---
 * ✅ **Usage Examples**
 *
 * **1️⃣ Fixed size**
 * ```tsx
 * <PlaceholderImage width={120} height={120} className="opacity-60 mb-4" />
 * ```
 * → Renders a 120×120 placeholder centered within its box.
 *
 * **2️⃣ Fill parent container**
 * ```tsx
 * <div className="w-40 h-40 rounded-lg overflow-hidden bg-gray-100">
 *   <PlaceholderImage />
 * </div>
 * ```
 * → Fills the entire parent area (160×160) with `object-cover`, clipped by rounded corners.
 *
 * **3️⃣ Responsive container**
 * ```tsx
 * <div className="aspect-[16/9] w-full bg-gray-100 rounded-lg overflow-hidden">
 *   <PlaceholderImage />
 * </div>
 * ```
 * → Adapts to parent’s aspect ratio, ideal for responsive layouts or banners.
 *
 * ---
 * 💡 **Tip:**
 * You can add theme-aware variants (e.g., dark/light placeholders) using `next-themes`.
 */
export function PlaceholderImage({
                                     alt = "Placeholder image",
                                     width,
                                     height,
                                     className,
                                 }: PlaceholderImageProps) {
    const isFillMode = !width && !height;

    return isFillMode ? (
        // Fill parent container mode
        <div className={cn("relative w-full h-full overflow-hidden", className)}>
            <Image
                src="/placeholder.svg"
                alt={alt}
                fill
                className="object-cover"
                sizes="100%"
            />
        </div>
    ) : (
        // Fixed size mode
        <Image
            src="/placeholder.svg"
            alt={alt}
            width={width}
            height={height}
            className={cn("object-contain", className)}
        />
    );
}
