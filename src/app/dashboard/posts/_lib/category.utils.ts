import {createEnumHelpers} from "@/lib/enum-helper";

/** -----------------------------
 * 1. Define enum-like object
 * ----------------------------- */
export const CategoryEnum = {
    TECH: "tech",
    LIFESTYLE: "lifestyle",
    BUSINESS: "business",
} as const;

export type Category = (typeof CategoryEnum)[keyof typeof CategoryEnum];

/** -----------------------------
 * 2. Define display/config metadata
 * ----------------------------- */
export const CategoryConfig: Record<Category, {
    label: string;
    slug: string;
    color: string;
    bgColor: string;
    description?: string;
    image?: string;
}> = {
    tech: {
        label: "Technology",
        slug: "tech",
        color: "text-blue-500",
        bgColor: "bg-blue-100",
        description: "Latest tech news and tutorials.",
        image: "/images/tech.png",
    },
    lifestyle: {
        label: "Lifestyle",
        slug: "lifestyle",
        color: "text-green-500",
        bgColor: "bg-green-100",
        description: "Tips for health, fashion, and living.",
        image: "/images/lifestyle.png",
    },
    business: {
        label: "Business",
        slug: "business",
        color: "text-purple-500",
        bgColor: "bg-purple-100",
        description: "Insights on startups and corporate world.",
        image: "/images/business.png",
    },
};

/** -----------------------------
 * 3. Create Category utilities
 * ----------------------------- */
export const CategoryUtils = createEnumHelpers(CategoryEnum, CategoryConfig);

/** -----------------------------
 * Usage Examples
 * ----------------------------- */

// Get all category values
// CategoryUtils.getValues() -> ["tech","lifestyle","business"]

// Validate string
// CategoryUtils.isValid("tech") -> true

// Convert string to enum
// CategoryUtils.toValue("tech") -> "tech"

// Get dropdown options
// CategoryUtils.getOptions() -> [{ value: "tech", label: "Technology", color: "text-blue-500", ... }, ...]

// Zod validation
// const schema = CategoryUtils.zodSchema
// schema.parse("tech") -> "tech"
// schema.parse("invalid") -> throws
