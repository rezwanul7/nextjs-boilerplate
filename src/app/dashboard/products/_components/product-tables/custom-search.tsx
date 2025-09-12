// Search.tsx

import {useParams} from "next/navigation";
import {useQueryState} from "nuqs";
import {useTransition} from "react";
import {productSearch} from "@/app/dashboard/products/_lib/product.types";

export default function CustomSearch() {
    const params = useParams();
    const [isPending, startTransition] = useTransition();
    const [name, setName] = useQueryState(
        'name',
        productSearch.definition.name.withOptions({
            shallow: false,
            startTransition,
        }),
    );

    return (
        <form className="relative flex w-full flex-col gap-1 sm:w-fit">
            <label className="font-semibold uppercase" htmlFor="search">
                Search
            </label>
            <input
                autoComplete="off"
                id="search"
                onChange={e => {
                    setName(e.target.value);
                }}
                defaultValue={name ?? ""}
                className="w-full pl-10 sm:w-96"
                name="name"
                placeholder="Search in task title or description..."
                type="search"
            />

        </form>
    );
}