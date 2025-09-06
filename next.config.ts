import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "api.slingacademy.com",
                pathname: "/public/sample-products/**",
            },
        ],
    },
};

export default nextConfig;
