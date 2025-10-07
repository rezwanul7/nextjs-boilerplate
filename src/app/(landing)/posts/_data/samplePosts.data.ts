export interface SamplePost {
    id: number;
    author: string;
    username: string;
    initials: string;
    timeAgo: string;
    content: string;
    tags: string[];
    likes: number;
    comments: number;
    reposts: number;
    isLiked: boolean;
    isBookmarked: boolean;
    image: string | null;
}

export const samplePosts: SamplePost[] = [
    {
        id: 1,
        author: "Sarah Chen",
        username: "@sarahdev",
        initials: "SC",
        timeAgo: "2h",
        content:
            "Just discovered this amazing CSS trick for creating smooth hover animations! 🎨\n\n```css\n.card {\n  transition: transform 0.3s ease;\n}\n.card:hover {\n  transform: translateY(-8px);\n}\n```\n\nSuch a simple way to add life to your UI components!",
        tags: ["CSS", "Animation", "WebDev"],
        likes: 42,
        comments: 8,
        reposts: 12,
        isLiked: false,
        isBookmarked: true,
        image: null,
    },
    {
        id: 2,
        author: "Alex Rodriguez",
        username: "@alexcodes",
        initials: "AR",
        timeAgo: "4h",
        content:
            "Hot take: TypeScript's strict mode should be enabled by default in all new projects. The initial learning curve is worth the long-term benefits.\n\nWhat's your experience with strict mode? Love it or hate it?",
        tags: ["TypeScript", "Opinion", "DevLife"],
        likes: 156,
        comments: 23,
        reposts: 31,
        isLiked: true,
        isBookmarked: false,
        image: null,
    },
    {
        id: 3,
        author: "Maya Patel",
        username: "@mayabuilds",
        initials: "MP",
        timeAgo: "6h",
        content:
            "Finally shipped our new dashboard redesign! 🚀\n\nKey improvements:\n• 40% faster load times\n• Mobile-first responsive design\n• Dark mode support\n• Accessibility score: 98/100\n\nFeels good to see months of work go live!",
        tags: ["Shipping", "Dashboard", "Performance"],
        likes: 89,
        comments: 15,
        reposts: 22,
        isLiked: false,
        isBookmarked: false,
        image: "/professional-woman-developer.png",
    },
    {
        id: 4,
        author: "Dev Community",
        username: "@devcommunity",
        initials: "DC",
        timeAgo: "8h",
        content:
            '📚 Weekend reading list for developers:\n\n1. "Clean Code" by Robert Martin\n2. "System Design Interview" by Alex Xu\n3. "The Pragmatic Programmer" by Hunt & Thomas\n\nWhich one should I start with? Drop your recommendations below! 👇',
        tags: ["Books", "Learning", "Community"],
        likes: 234,
        comments: 67,
        reposts: 89,
        isLiked: true,
        isBookmarked: true,
        image: null,
    },
    {
        id: 5,
        author: "Tech Insights",
        username: "@techinsights",
        initials: "TI",
        timeAgo: "12h",
        content:
            "React 19 is bringing some exciting changes! 🔥\n\n• New React Compiler for automatic optimization\n• Improved Suspense with better error boundaries\n• Enhanced Server Components\n• Built-in support for Web Components\n\nThe future of React looks bright!",
        tags: ["React", "React19", "Updates"],
        likes: 312,
        comments: 45,
        reposts: 78,
        isLiked: false,
        isBookmarked: false,
        image: null,
    },
    {
        id: 6,
        author: "Dev Community",
        username: "@devcommunity",
        initials: "DC",
        timeAgo: "8h",
        content:
            '📚 Weekend reading list for developers:\n\n1. "Clean Code" by Robert Martin\n2. "System Design Interview" by Alex Xu\n3. "The Pragmatic Programmer" by Hunt & Thomas\n\nWhich one should I start with? Drop your recommendations below! 👇',
        tags: ["Books", "Learning", "Community"],
        likes: 234,
        comments: 67,
        reposts: 89,
        isLiked: true,
        isBookmarked: true,
        image: null,
    },
]