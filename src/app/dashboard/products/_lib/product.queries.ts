import {GetProductsSearchParamsDto} from "@/app/dashboard/products/_lib/product.types";
import {fakeProducts} from "@/app/dashboard/products/_lib/mock-api";

export async function getProducts(params: GetProductsSearchParamsDto) {
    const {page, perPage: limit, name: search, category: categories} = params;

    return await fakeProducts.getProducts({
        page,
        limit,
        search: search ?? undefined,
        categories: categories ?? undefined,
    });
}