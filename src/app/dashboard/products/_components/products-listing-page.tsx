import {Product, productSearch} from "@/app/dashboard/products/_lib/product.types";

import {ProductTable} from './product-tables/data-table';
import {columns} from '@/app/dashboard/products/_components/product-tables/columns';
import {ProductGrid} from "@/app/dashboard/products/_components/product-tables/data-grid";
import {getProducts} from "@/app/dashboard/products/_lib/product.queries";

type ProductListingPage = {};

export default async function ProductListingPage({}: ProductListingPage) {
    const productSearchParams = productSearch.cache.all();

    console.log("ProductListingPage: productSearchParams", productSearchParams);

    const data = await getProducts(productSearchParams);
    const totalProducts = data.total;
    const products: Product[] = data.data;

    const gridView = false;

    if (gridView) {
        // If you want to use the DataGrid component instead of DataTable, uncomment the following lines:
        return (
            <ProductGrid
                data={products}
                totalItems={totalProducts}
                columns={columns}
            />
        );
    }

    return (
        <ProductTable
            data={products}
            totalItems={totalProducts}
            columns={columns}
        />
    );
}