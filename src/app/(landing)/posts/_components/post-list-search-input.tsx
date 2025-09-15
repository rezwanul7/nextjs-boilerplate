import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {useDebouncedCallback} from "@/hooks/use-debounced-callback";
import {useState} from "react";

interface SearchBarProps {
    onSearch: (value: string) => void;
    initialValue?: string;
}

export function PostListSearchInput({ onSearch, initialValue = "" }: SearchBarProps) {
    // Debounced onChange
    const [query, setQuery] = useState(initialValue);

    // Debounced callback for smooth search
    const debounced = useDebouncedCallback(
        (value: string) => {
            onSearch(value);
        },
        300 // debounce delay in ms
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        debounced(value); // call debounced search
    };

    return (
        <div className="relative flex-1">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400"/>

            <Input
                type="text"
                placeholder="Search..."
                value={query}
                onChange={handleChange}
                className="pl-9 h-9 text-sm bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700"
            />
        </div>
    )
}