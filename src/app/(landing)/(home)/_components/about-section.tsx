import {ArrowRight, Award, BookOpen, Target, Users} from "lucide-react"
import {Button} from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
    return (
        <div id="about">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About DevBlog</h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Empowering developers worldwide with cutting-edge insights, tutorials, and best practices for
                        modern web
                        development.
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto px-6 py-16">
                {/* Mission Section */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div
                                className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
                                <Target className="h-6 w-6 text-white"/>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            We believe that knowledge should be accessible to everyone. Our mission is to create a
                            comprehensive
                            resource where developers of all levels can learn, grow, and stay updated with the latest
                            trends in web
                            development.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            From beginner tutorials to advanced architectural patterns, we cover the full spectrum of
                            modern
                            development practices with real-world examples and practical insights.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                <div className="text-gray-600 dark:text-gray-400">Articles Published</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-indigo-600 mb-2">50K+</div>
                                <div className="text-gray-600 dark:text-gray-400">Monthly Readers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
                                <div className="text-gray-600 dark:text-gray-400">Expert Authors</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pink-600 mb-2">100+</div>
                                <div className="text-gray-600 dark:text-gray-400">Topics Covered</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="mb-20">
                    <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">What We Stand
                        For</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <BookOpen className="h-8 w-8 text-white"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quality
                                Content</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Every article is thoroughly researched, tested, and reviewed by our expert team to
                                ensure accuracy and
                                relevance.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-white"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Community
                                First</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We foster an inclusive community where developers can learn from each other and grow
                                together.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="h-8 w-8 text-white"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Excellence</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We strive for excellence in everything we do, from content creation to user experience
                                and community
                                engagement.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                        Ready to level up your development skills? Explore our articles, join discussions, and become
                        part of our
                        growing community.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="#">
                            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                                Explore Articles
                                <ArrowRight className="ml-2 h-4 w-4"/>
                            </Button>
                        </Link>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                        >
                            Subscribe to Newsletter
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
