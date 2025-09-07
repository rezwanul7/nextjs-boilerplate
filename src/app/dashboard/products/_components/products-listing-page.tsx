import {fakeProducts} from '@/app/dashboard/products/_lib/mock-api';
import {Product, productSearch} from "@/app/dashboard/products/_lib/product.types";

import {ProductTable} from './product-tables/data-table';
import {columns} from '@/app/dashboard/products/_components/product-tables/columns';

type ProductListingPage = {};

export default async function ProductListingPage({}: ProductListingPage) {
    const productSearchParams = productSearch.cache.all();
    const data = await fakeProducts.getProducts(productSearchParams);
    const totalProducts = data.total;
    const products: Product[] = data.data;

    return (
        <ProductTable
            data={products}
            totalItems={totalProducts}
            columns={columns}
        />
    );
}