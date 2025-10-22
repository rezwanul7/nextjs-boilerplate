import {NextRequest} from "next/server";
import {ImageResponse} from "next/og";

export async function GET(req: NextRequest) {
    const {searchParams} = new URL(req.url);
    const title = searchParams.get("title") || "My Blog";
    const author = searchParams.get("author") || "Rezwan";
    const date = searchParams.get("date");

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
                    background: "linear-gradient(135deg, #f97316, #ec4899)",
                    borderRadius: "24px",
                    padding: "80px",
                    textAlign: "center",
                    color: "#fff",
                    fontFamily: "Inter, sans-serif",
                }}
            >
                <div style={{fontSize: 64, fontWeight: 700, lineHeight: 1.2}}>
                    {title}
                </div>

                <div
                    style={{marginTop: 40, fontSize: 32, opacity: 0.85, display: "flex", gap: "8px", flexWrap: "wrap"}}>
                    <span>{author}</span>
                    {date && <span>• {new Date(date).toLocaleDateString()}</span>}
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        }
    );
}
