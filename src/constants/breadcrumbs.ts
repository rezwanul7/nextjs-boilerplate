type BreadcrumbItem = {
    title: string;
    link: string;
};


// This allows to add custom title as well
export const routeMapping: Record<string, BreadcrumbItem[]> = {
    '/dashboard': [{title: 'Dashboard', link: '/dashboard'}],
    '/dashboard/employee': [
        {title: 'Dashboard', link: '/dashboard'},
        {title: 'Employee', link: '/dashboard/employee'}
    ],
    '/dashboard/product': [
        {title: 'Dashboard', link: '/dashboard'},
        {title: 'Product', link: '/dashboard/product'}
    ]
    // Add more custom mappings as needed
};