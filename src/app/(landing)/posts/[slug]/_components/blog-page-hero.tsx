'use client';
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {Calendar, Clock, Eye, Heart, MessageCircle} from "lucide-react";

type Author = {
    name: string;
    avatar?: string;
    initials: string;
    role: string;
    company: string;
};

type BlogPageHeroProps = {
    category: string;
    title: string;
    excerpt: string;
    author: Author;
    publishedAt: string | Date;
    readTime: string;
    views: string;
    likes: number;
    comments: number;
};

export default function BlogPageHero(
    {
        category,
        title,
        excerpt,
        author,
        publishedAt,
        readTime,
        views,
        likes,
        comments,
    }: BlogPageHeroProps) {
    return (
        <section
            className="bg-blue-700 bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div
                className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=60 height=60 viewBox=0 0 60 60 xmlns=http://www.w3.org/2000/svg%3E%3Cg fill=none fillRule=evenodd%3E%3Cg fill=%23ffffff fillOpacity=0.05%3E%3Ccircle cx=30 cy=30 r=2/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

            <div className="container mx-auto px-4 max-w-5xl relative">
                <div className="text-center mb-12">
                    <Badge variant="secondary"
                           className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
                        {category}
                    </Badge>
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-balance mb-8 leading-tight text-white">
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-50 text-pretty max-w-4xl mx-auto leading-relaxed">
                        {excerpt}
                    </p>
                </div>

                <div
                    className="flex flex-col lg:flex-row items-center justify-between gap-8 p-8 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
                    <div className="flex items-center gap-6">
                        <Avatar className="h-16 w-16 ring-4 ring-white/30">
                            <AvatarImage src={author.avatar || "/placeholder.svg"}
                                         alt={author.name}/>
                            <AvatarFallback className="bg-blue-600 text-white font-bold text-lg">
                                {author.initials}
                            </AvatarFallback>
                        </Avatar>
                        <div>
                            <p className="font-bold text-xl text-white">{author.name}</p>
                            <p className="text-blue-200 mb-2">
                                {author.role} at {author.company}
                            </p>
                            <div className="flex items-center gap-6 text-sm text-blue-200">
                                <div className="flex items-center gap-2">
                                    <Calendar className="h-4 w-4"/>
                                    <span>
                      {new Date(publishedAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                      })}
                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4"/>
                                    <span>{readTime}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 text-sm text-blue-200">
                        <div className="flex items-center gap-2">
                            <Eye className="h-5 w-5"/>
                            <span className="font-medium">{views} views</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Heart className="h-5 w-5"/>
                            <span className="font-medium">{likes} likes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MessageCircle className="h-5 w-5"/>
                            <span className="font-medium">{comments} comments</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}