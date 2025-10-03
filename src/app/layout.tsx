import type {Metadata} from "next";
import {ClerkProvider,} from '@clerk/nextjs'
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import {NuqsAdapter} from 'nuqs/adapters/next/app'
import {siteData} from "@/constants/site";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: `${siteData.name} - ${siteData.title}`,
        template: `%s | ${siteData.name}`,
    },
    description: siteData.description,
    keywords: siteData.keywords, // Optional
    authors: [{name: siteData.authorName, url: siteData.authorUrl}],
    creator: siteData.authorName,

    // Open Graph
    openGraph: {
        title: `${siteData.name} - ${siteData.title}`,
        description: siteData.description,
        type: "website",
        url: siteData.url,
        siteName: siteData.name,
        images: [
            {
                url: siteData.ogImage,
                width: 1200,
                height: 630,
                alt: siteData.name,
            },
        ],
    },

    // Twitter Card
    twitter: {
        card: "summary_large_image",
        title: `${siteData.name} - ${siteData.title}`,
        description: siteData.description,
        creator: siteData.twitterHandle || "@username",
        images: [siteData.ogImage],
    },

    // Additional tags
    alternates: {
        canonical: siteData.url,
    },

    // Structured data (JSON-LD) for the site
    metadataBase: new URL(siteData.url),
    verification: {
        google: siteData.googleVerification || "",
    },
};

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <NuqsAdapter>
                {children}
            </NuqsAdapter>
            <Toaster position="top-right" richColors/>
            </body>
            </html>
        </ClerkProvider>
    )
}
