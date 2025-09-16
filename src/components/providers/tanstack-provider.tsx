"use client";

import {QueryClientProvider} from "@tanstack/react-query";
import {useState} from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {getQueryClient} from "@/lib/tanstack-query-client";

interface TanstackProviderProps {
    children: React.ReactNode;
}


export const TanstackProvider = ({children}: TanstackProviderProps) => {
    // const [queryClient] = useState(() => getQueryClient());
    const queryClient = getQueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
};