import {
    IconCamera,
    IconChartBar,
    IconDashboard,
    IconDatabase,
    IconFileAi,
    IconFileDescription,
    IconFileWord,
    IconFolder,
    IconHelp, IconHome,
    IconListDetails, IconPackages,
    IconReport,
    IconSearch,
    IconSettings,
    IconUsers
} from "@tabler/icons-react";

export const appSideBarData = {
    navMain: [
        {
            title: "Dashboard",
            url: "/dashboard",
            icon: IconDashboard,
        },
        {
            title: "Posts",
            url: "/dashboard/posts",
            icon: IconListDetails,
        },
        {
            title: "Products",
            url: "/dashboard/products",
            icon: IconPackages,
        },
        {
            title: "Account",
            url: "/dashboard/user-profile",
            icon: IconSettings,
        },
        // {
        //     title: "Analytics",
        //     url: "#",
        //     icon: IconChartBar,
        // },
        // {
        //     title: "Team",
        //     url: "#",
        //     icon: IconUsers,
        // },
    ],
    navClouds: [
        {
            title: "Capture",
            icon: IconCamera,
            isActive: true,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Proposal",
            icon: IconFileDescription,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
        {
            title: "Prompts",
            icon: IconFileAi,
            url: "#",
            items: [
                {
                    title: "Active Proposals",
                    url: "#",
                },
                {
                    title: "Archived",
                    url: "#",
                },
            ],
        },
    ],
    navSecondary: [
        // {
        //     title: "Settings",
        //     url: "#",
        //     icon: IconSettings,
        // },
        // {
        //     title: "Get Help",
        //     url: "#",
        //     icon: IconHelp,
        // },
        // {
        //     title: "Search",
        //     url: "#",
        //     icon: IconSearch,
        // },
    ],
    documents: [
        // {
        //     name: "Data Library",
        //     url: "#",
        //     icon: IconDatabase,
        // },
        // {
        //     name: "Reports",
        //     url: "#",
        //     icon: IconReport,
        // },
        // {
        //     name: "Word Assistant",
        //     url: "#",
        //     icon: IconFileWord,
        // },
    ],
}