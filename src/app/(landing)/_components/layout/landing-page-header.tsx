"use client"

import {BookOpen, Menu, X} from "lucide-react";
import {Button} from "@/components/ui/button"
import {useState} from "react";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import Link from "next/link";

export default function LandingPageHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <nav
            className="sticky top-0 z-50 border-b border-white/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-gray-900/80 shadow-sm">
            <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
                <Link href="/" className="flex items-center space-x-3">
                    <div
                        className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-600 to-pink-600 flex items-center justify-center shadow-lg">
                        <BookOpen className="h-5 w-5 text-white"/>
                    </div>
                    <div>
                        <span className="font-bold text-xl text-gray-900 dark:text-white">
                            MicroBlog
                        </span>
                        <p className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                            Developer Community
                        </p>
                    </div>
                </Link>

                <div className="hidden md:flex items-center space-x-6">
                    <Link href="/">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                        >
                            Feed
                        </Button>
                    </Link>

                    <Button
                        variant="ghost"
                        size="sm"
                        disabled
                        className="text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-60 font-medium"
                    >
                        Explore
                    </Button>

                    <Button
                        variant="ghost"
                        size="sm"
                        disabled
                        className="text-gray-400 dark:text-gray-500 cursor-not-allowed opacity-60 font-medium"
                    >
                        Articles
                    </Button>

                    <Link href="/categories">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                        >
                            Topics
                        </Button>
                    </Link>
                    <Link href="/about">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                        >
                            About
                        </Button>
                    </Link>
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
                </div>

                <div className="md:hidden">
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400"
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
                                className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                            >
                                Feed
                            </Button>
                        </Link>


                        <Button
                            variant="ghost"
                            disabled
                            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                        >
                            Explore
                        </Button>


                        <Button
                            variant="ghost"
                            disabled
                            className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                        >
                            Articles
                        </Button>


                        <Link href="/categories">
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                            >
                                Topics
                            </Button>
                        </Link>

                        <Link href="/about">
                            <Button
                                variant="ghost"
                                className="w-full justify-start text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 hover:bg-orange-50 dark:hover:bg-orange-900/20 font-medium"
                            >
                                About
                            </Button>
                        </Link>

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
                    </div>
                </div>
            )}
        </nav>
    );
}