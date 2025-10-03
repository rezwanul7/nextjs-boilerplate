import {BookOpen} from "lucide-react";
import {siteData} from "@/constants/site";
import {cn} from "@/lib/utils";

interface LogoProps {
    variant?: "light" | "dark";   // controls color scheme
    showText?: boolean;           // controls text visibility
    className?: string;           // extra classes for root container
}

export const Logo = ({ variant = "light", showText = true, className }: LogoProps) => {
    const isDark = variant === "dark";

    // 🎨 Local color tokens
    const colors = {
        bg: isDark
            ? "bg-gradient-to-br from-blue-600 to-indigo-600" //"bg-gradient-to-br from-gray-800 to-gray-900"
            : "bg-gradient-to-br from-blue-600 to-indigo-600",
        title: isDark ? "text-white" : "text-gray-900",
        subtitle: isDark ? "text-gray-400" : "text-gray-500",
    };

    return (
        <div className={cn("flex items-center space-x-3", className)}>
            {/* Icon container */}
            <div className={`h-10 w-10 rounded-xl flex items-center justify-center shadow-lg ${colors.bg}`}>
                <BookOpen className="h-5 w-5 text-white"/>
            </div>

            {/* Text only if showText */}
            {showText && (
                <div>
                    <span className={`font-bold text-xl ${colors.title}`}>
                        {siteData.logo.text}
                    </span>
                    <p className={`text-xs -mt-1 ${colors.subtitle}`}>
                        {siteData.logo.tagline}
                    </p>
                </div>
            )}
        </div>
    );
};
