"use client";

import {useQueryState} from "nuqs";
import {Input} from "@/components/ui/input";

export default function SearchInput() {

    // 1️⃣ Bind query param "title" with a default empty string
    const [searchQuery, setSearchQuery] = useQueryState("title", {
        defaultValue: "", // ensure controlled input
    });

    return (
        <Input
            placeholder="Search articles, tutorials, guides, and more..."
            value={searchQuery}
            onChange={(e) => {
                return setSearchQuery(e.target.value);
            }}
            className="flex-1 border-0 bg-transparent text-lg text-gray-900 placeholder:text-gray-500 focus:ring-0 focus:outline-none h-12"
        />
    );
}