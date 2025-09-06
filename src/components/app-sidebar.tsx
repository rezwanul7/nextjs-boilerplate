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


export function AppSidebar({...props}: React.ComponentProps<typeof Sidebar>) {
    const {user} = useUser();

    const userData = {
        name: user?.fullName || "John Doe",
        email: user?.primaryEmailAddress?.emailAddress || "m@example.com",
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
                            <a href="#">
                                <IconInnerShadowTop className="!size-5"/>
                                <span className="text-base font-semibold">Acme Inc.</span>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={appSideBarData.navMain}/>
                {/*<NavDocuments items={appSideBarData.documents} />*/}
                {/*<NavSecondary items={appSideBarData.navSecondary} className="mt-auto" />*/}
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={userData}/>
            </SidebarFooter>
        </Sidebar>
    )
}
