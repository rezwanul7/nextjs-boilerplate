import Header from "@/app/(landing)/components/header";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen bg-muted">
                <Header/>
                {children}
            </div>
        </>
    )
}
