import {AppSidebar} from "@/components/app-sidebar";
import {SiteHeader} from "@/components/site-header";
import NextTopLoader from 'nextjs-toploader';

import {SidebarInset, SidebarProvider,} from "@/components/ui/sidebar"

export default async function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <NextTopLoader showSpinner={false}/>
            <SidebarProvider
                style={
                    {
                        "--sidebar-width": "calc(var(--spacing) * 72)",
                        "--header-height": "calc(var(--spacing) * 12)",
                    } as React.CSSProperties
                }
            >
                <AppSidebar variant="inset"/>
                <SidebarInset>
                    <SiteHeader/>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </>
    )
}