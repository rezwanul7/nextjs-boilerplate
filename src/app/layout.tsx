import type {Metadata} from "next";
import {ClerkProvider,} from '@clerk/nextjs'
import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import {Toaster} from "@/components/ui/sonner";
import {NuqsAdapter} from 'nuqs/adapters/next/app'
import {TanstackProvider} from "@/components/providers/tanstack-provider";
import {siteData} from "@/constants/site";
import {envConfig} from "@/config/env";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

const ogUrl = new URL(`${envConfig.baseUrl}/api/og`);

export const metadata: Metadata = {
    title: {
        default: `${siteData.name} - ${siteData.title}`,
        template: `%s | ${siteData.name}`,
    },
    description: siteData.description,
    keywords: siteData.keywords,
    authors: [{ name: siteData.authorName, url: siteData.authorUrl }],
    creator: siteData.authorName,

    // Open Graph
    openGraph: {
        type: "website",
        title: `${siteData.name} - ${siteData.title}`,
        description: siteData.description,
        url: siteData.url,
        siteName: siteData.name,
        images: [
            {
                url: ogUrl.toString(), // dynamic site-wide OG image generator instead of - siteData.ogImage
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
        images: [ogUrl.toString()], // dynamic site-wide OG image generator instead of - siteData.ogImage
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
                <TanstackProvider>
                    {children}
                </TanstackProvider>
            </NuqsAdapter>
            <Toaster position="top-right" richColors/>
            </body>
            </html>
        </ClerkProvider>
    )
}
