import {Button} from "@/components/ui/button";
import {useEffect} from "react";

interface PaginationSectionProps {
    page: number;
    perPage: number;
    totalCount: number;
    onPageChange: (newPage: number) => void;
}

export function PostListPagination({
                                       page,
                                       perPage,
                                       totalCount,
                                       onPageChange,
                                   }: PaginationSectionProps) {
    const totalPages = Math.max(1, Math.ceil(totalCount / perPage));

    // ✅ Scroll to top every time page changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        console.log("Scrolled to top after page change");
    }, [page]);

    const handlePrev = () => {
        if (page > 1) onPageChange(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) onPageChange(page + 1);
    };

    return (
        <div className="flex items-center justify-center gap-4 mt-6">
            <Button
                onClick={handlePrev}
                disabled={page <= 1}
            >
                Prev
            </Button>

            <span className="text-sm font-medium">
        Page {page} of {totalPages} &nbsp;|&nbsp; {totalCount} results
      </span>

            <Button
                onClick={handleNext}
                disabled={page >= totalPages}
            >
                Next
            </Button>
        </div>
    );
}