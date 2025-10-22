import {NextRequest} from "next/server";
import {ImageResponse} from "next/og";
import {siteData} from "@/constants/site";

export async function GET(req: NextRequest) {
    
    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "1200px",
                    height: "630px",
                    background: "linear-gradient(135deg, #2563EB, #4F46E5, #5B21B6)",
                    borderRadius: "24px",
                    padding: "80px",
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                }}
            >
                <div style={{fontSize: 64, fontWeight: 700, lineHeight: 1.2}}>
                    {siteData.name}
                </div>

                <div
                    style={{marginTop: 40, fontSize: 48, opacity: 0.85, display: "flex", gap: "8px", flexWrap: "wrap"}}>
                    <span>{siteData.authorName}</span>
                </div>
                <div
                    style={{marginTop: 40, fontSize: 36, opacity: 0.85, display: "flex", gap: "8px", flexWrap: "wrap"}}>
                    <span>{siteData.authorUrl}</span>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
