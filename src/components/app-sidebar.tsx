"use client"

import * as React from "react"
import {IconInnerShadowTop,} from "@tabler/icons-react"
import {NavMain} from "@/components/nav-main"
import {NavUser} from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {useUser} from '@clerk/nextjs';
import {appSideBarData} from "@/constants/appSideBarData";
import {NavSecondary} from "@/components/nav-secondary";
import {NavDocuments} from "@/components/nav-documents";


export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    const {user} = useUser();

    const userData = {
        name: user?.fullName || "",
        email: user?.primaryEmailAddress?.emailAddress || "",
        avatar: user?.imageUrl || "/avatars/shadcn.jpg",
    }


    return (
        <Sidebar collapsible="offcanvas" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton
                            asChild
                            className="data-[slot=sidebar-menu-button]:!p-1.5"
                        >
                            <a href="/">
                                <IconInnerShadowTop className="!size-5"/>
                                <span className="text-base font-semibold">Acme Inc.</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={appSideBarData.navMain}/>
                {
                    appSideBarData.documents.length > 0 && (
                        <NavDocuments items={appSideBarData.documents}/>
                    )
                }
                {
                    appSideBarData.navSecondary.length > 0 && (
                        <NavSecondary items={appSideBarData.navSecondary} className="mt-auto"/>
                    )
                }
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userData}/>
            </SidebarFooter>
        </Sidebar>
    )
}
