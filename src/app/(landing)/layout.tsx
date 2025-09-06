import Header from "@/app/(landing)/_components/layout/header";
import Header2 from "@/app/(landing)/_components/layout/header2";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/*<Header/>*/}
                <Header2 />
                {children}
            </div>
        </>
    )
}
