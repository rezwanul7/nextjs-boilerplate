import Header2 from "@/app/(landing)/_components/layout/header2";
import {Footer} from "@/app/(landing)/_components/layout/footer/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <div
                className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
                {/*<Header/>*/}
                <Header2/>
                {children}
                <Footer/>
            </div>
        </>
    )
}
