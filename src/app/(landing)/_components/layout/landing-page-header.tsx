"use client"

import {BookOpen, Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button"
import {useState} from "react";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import {scrollToSection} from "@/lib/scroll";
import {envConfig} from "@/config/env";
import {Logo} from "@/app/(landing)/_components/layout/navbar/logo";

export default function LandingPageHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav
            className="sticky top-0 z-50 border-b border-white/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-900/80 shadow-sm">
            <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
                <Link href="/">
                    <Logo/>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                        >
                            Home
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                        onClick={() => scrollToSection("categories")}
                    >
                        Categories
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                        onClick={() => scrollToSection("about")}
                    >
                        About
                    </Button>

                    {
                        envConfig.displayAuth && (
                            <div
                                className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
                                <SignedOut>
                                    <SignInButton>
                                        <Button
                                            variant="outline"
                                            className="hidden sm:inline-flex rounded-full"
                                        >
                                            Sign In
                                        </Button>
                                    </SignInButton>
                                    <SignUpButton>
                                        <Button className="rounded-full">Get Started</Button>
                                    </SignUpButton>
                                </SignedOut>
                                <SignedIn>
                                    <Link href="/dashboard" passHref>
                                        <Button className="rounded-full">Visit Dashboard</Button>
                                    </Link>
                                    <UserButton/>
                                </SignedIn>
                            </div>
                        )
                    }
                </div>

                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    >
                        {isMobileMenuOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
                    </Button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="md:hidden border-t border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-gray-900/95 backdrop-blur">
                    <div className="px-6 py-4 space-y-3">
                        <Link href="/">
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                            >
                                Home
                            </Button>
                        </Link>

                        <Button
                            variant="ghost"
                            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                            onClick={() => scrollToSection("categories")}
                        >
                            Categories
                        </Button>

                        <Button
                            variant="ghost"
                            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                            onClick={() => scrollToSection("about")}
                        >
                            About
                        </Button>

                        {
                            envConfig.displayAuth && (
                                <div
                                    className="flex items-center justify-center space-x-4 pt-3 border-t border-gray-200 dark:border-gray-700">
                                    <SignedOut>
                                        <SignInButton>
                                            <Button
                                                variant="outline"
                                                className="hidden sm:inline-flex rounded-full"
                                            >
                                                Sign In
                                            </Button>
                                        </SignInButton>
                                        <SignUpButton>
                                            <Button className="rounded-full">Get Started</Button>
                                        </SignUpButton>
                                    </SignedOut>
                                    <SignedIn>
                                        <Link href="/dashboard" passHref>
                                            <Button className="rounded-full">Visit Dashboard</Button>
                                        </Link>
                                        <UserButton/>
                                    </SignedIn>
                                </div>
                            )
                        }

                    </div>
                </div>
            )}
        </nav>
    );
}