import {BookOpen} from "lucide-react";
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import Link from "next/link"
import {siteData} from "@/constants/site";

export function Footer() {
    return (
        <footer className="bg-gradient-to-r from-orange-900 to-pink-900 text-white mt-16">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="sm:col-span-2 lg:col-span-1">
                        <div className="flex items-center space-x-3 mb-4">
                            <div
                                className="h-10 w-10 rounded-xl bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                                <BookOpen className="h-5 w-5 text-white"/>
                            </div>
                            <div>
                                <span className="font-bold text-xl">DevMicro</span>
                                <p className="text-xs text-orange-200 -mt-1">Developer Community</p>
                            </div>
                        </div>
                        <p className="text-orange-200 text-sm leading-relaxed mb-4">
                            Join us as we explore the exciting world of web development, share knowledge, and build
                            amazing things
                            together.
                        </p>
                        <div className="flex space-x-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-orange-200 hover:text-white hover:bg-white/10"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                                </svg>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-orange-200 hover:text-white hover:bg-white/10"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                                </svg>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-orange-200 hover:text-white hover:bg-white/10"
                            >
                                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </Button>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/" className="text-orange-200 hover:text-white text-sm transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/search"
                                      className="text-orange-200 hover:text-white text-sm transition-colors">
                                    Explore
                                </Link>
                            </li>
                            <li>
                                <Link href="/categories"
                                      className="text-orange-200 hover:text-white text-sm transition-colors">
                                    Topics
                                </Link>
                            </li>
                            <li>
                                <Link href="/about"
                                      className="text-orange-200 hover:text-white text-sm transition-colors">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact"
                                      className="text-orange-200 hover:text-white text-sm transition-colors">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Popular Topics */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Popular Topics</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/search?q=react"
                                      className="text-orange-200 hover:text-white text-sm transition-colors">
                                    #React
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/search?q=typescript"
                                    className="text-orange-200 hover:text-white text-sm transition-colors"
                                >
                                    #TypeScript
                                </Link>
                            </li>
                            <li>
                                <Link href="/search?q=nextjs"
                                      className="text-orange-200 hover:text-white text-sm transition-colors">
                                    #Next.js
                                </Link>
                            </li>
                            <li>
                                <Link href="/search?q=webdev"
                                      className="text-orange-200 hover:text-white text-sm transition-colors">
                                    #WebDev
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/search?q=javascript"
                                    className="text-orange-200 hover:text-white text-sm transition-colors"
                                >
                                    #JavaScript
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Stay Updated</h3>
                        <p className="text-orange-200 text-sm mb-4">Get the latest posts and updates delivered to your
                            inbox.</p>
                        <div className="flex flex-col sm:flex-row gap-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-white/10 border-white/20 text-white placeholder:text-orange-200 focus:border-white/40"
                            />
                            <Button
                                className="bg-amber-500 hover:bg-amber-600 text-orange-900 font-semibold whitespace-nowrap">
                                Subscribe
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    className="border-t border-orange-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-orange-200 text-sm text-center sm:text-left">© 2024 DevMicro. All rights
                        reserved.</p>
                    <div className="flex items-center gap-6">
                        <Link href="/privacy" className="text-orange-200 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-orange-200 hover:text-white text-sm transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-orange-200 hover:text-white text-sm transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
            <div className="py-6 border-t border-orange-800">
                <div className="container mx-auto text-center">
                    <a
                        href={siteData.authorUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors"
                    >
                        <span>Made with</span>
                        <span className="text-white animate-pulse text-lg">♥</span>
                        <span>by</span>
                        <span className="font-medium text-blue-400 hover:underline">{siteData.authorName}</span>
                    </a>
                </div>
            </div>
        </footer>
    )
}