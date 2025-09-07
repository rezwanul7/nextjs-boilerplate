import {createSearchParamsUtils} from "@/lib/search-params";
import {parseAsInteger, parseAsString} from "nuqs/server";

export type Product = {
    photo_url: string;
    name: string;
    description: string;
    created_at: string;
    price: number;
    id: number;
    category: string;
    updated_at: string;
};


// Describe your search params, and reuse this in useQueryStates / createSerializer:
export const productSearch = createSearchParamsUtils({
    page: parseAsInteger.withDefault(1),
    perPage: parseAsInteger.withDefault(10),
    name: parseAsString,
    category: parseAsString
    // advanced filter
    // filters: getFiltersStateParser().withDefault([]),
    // joinOperator: parseAsStringEnum(['and', 'or']).withDefault('and')
});

export type GetProductsSearchParamsDto = Awaited<
    ReturnType<typeof productSearch.cache.parse>
>;

