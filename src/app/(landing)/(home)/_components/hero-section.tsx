import {Search} from "lucide-react";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

export async function HeroSection() {

    return (
        <div className="relative pt-24 pb-32 border-b bg-gradient-to-r from-red-500 to-orange-500 overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
                {/* Hero Content */}
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground tracking-tight leading-tight">
                        Share Your{" "}
                        <span
                            className="bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-400 bg-clip-text text-transparent ">
                            Moments
                        </span>
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                        Discover stories, share thoughts, and connect with a community that celebrates life’s golden
                        hours.
                    </p>
                </div>

                {/* Search Card */}
                <div className="max-w-3xl mx-auto">
                    <div
                        className="relative bg-card/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-golden/40 hover:border-golden/60 transition-colors">

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <div className="relative flex-1">
                                <Search
                                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5"/>
                                <Input placeholder="Search posts, topics, or people..."
                                       className="pl-12 pr-4 py-5 text-base md:text-lg border-2 border-border bg-background rounded-2xl focus:ring-2 focus:ring-golden focus:border-golden"/>
                            </div>
                            <Button
                                size="default"
                                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-4 h-11 rounded-xl shadow-lg font-semibold transition-all duration-200 hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                Explore
                            </Button>
                        </div>

                        {/* Trending Tags */}
                        <div className="flex flex-wrap items-center gap-3 mt-6 justify-center">
                            <span className="text-sm text-muted-foreground">Trending:</span>
                            {["#sunset", "#photography", "#travel", "#moments"].map((tag) => (
                                <button
                                    key={tag}
                                    className="px-3 py-0.5 rounded-full text-sm font-medium border border-golden/40 hover:border-golden transition-all bg-gradient-to-r from-yellow-300/30 to-amber-400/30 hover:from-yellow-300 hover:to-amber-400 text-accent-foreground hover:text-background shadow-sm"
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Glow */}
            <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-300/30 via-orange-400/20 to-red-400/20 rounded-full blur-3xl opacity-40"></div>
        </div>
    )
}