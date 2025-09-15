import {ArrowRight, Award, MessageCircle, Target, Users} from "lucide-react"
import {Button} from "@/components/ui/button"

export default function Page() {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white py-20">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">About DevMicro</h1>
                    <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
                        Where developers share quick insights, spark conversations, and build community through
                        bite-sized content
                        that matters.
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
                                className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center">
                                <Target className="h-6 w-6 text-white"/>
                            </div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Our Mission</h2>
                        </div>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                            We believe that great ideas come in small packages. Our mission is to create a vibrant
                            community where
                            developers can share quick insights, ask questions, and engage in meaningful conversations
                            without the
                            barrier of lengthy content.
                        </p>
                        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            From code snippets and quick tips to thought-provoking questions and industry observations,
                            we celebrate
                            the power of concise, impactful communication in the developer community.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                        <div className="grid grid-cols-2 gap-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-orange-600 mb-2">5.7K+</div>
                                <div className="text-gray-600 dark:text-gray-400">Micro-Posts Shared</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-pink-600 mb-2">2.1K+</div>
                                <div className="text-gray-600 dark:text-gray-400">Active Developers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-amber-600 mb-2">150+</div>
                                <div className="text-gray-600 dark:text-gray-400">Daily Interactions</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-rose-600 mb-2">8</div>
                                <div className="text-gray-600 dark:text-gray-400">Topic Categories</div>
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
                                className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <MessageCircle className="h-8 w-8 text-white"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Meaningful
                                Conversations</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                Every post, comment, and interaction is an opportunity to learn, teach, and connect with
                                fellow
                                developers in meaningful ways.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="h-8 w-8 text-white"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Inclusive
                                Community</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We foster an inclusive environment where developers of all backgrounds and experience
                                levels feel
                                welcome to share and learn.
                            </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg text-center">
                            <div
                                className="w-16 h-16 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="h-8 w-8 text-white"/>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Quality Over
                                Quantity</h3>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                                We value thoughtful, concise content that sparks discussion and provides real value to
                                the developer
                                community.
                            </p>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gradient-to-r from-orange-600 to-pink-600 rounded-2xl p-12 text-center text-white">
                    <h2 className="text-3xl font-bold mb-4">Join Our Developer Community</h2>
                    <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
                        Ready to share your insights and connect with fellow developers? Join thousands of developers
                        sharing
                        knowledge, one micro-post at a time.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 font-semibold">
                            Explore Posts
                            <ArrowRight className="ml-2 h-4 w-4"/>
                        </Button>

                        <Button
                            size="lg"
                            variant="outline"
                            className="border-white text-white hover:bg-white hover:text-orange-600 bg-transparent"
                        >
                            Start Posting
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
