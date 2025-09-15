import LandingPageHeader from "@/app/(landing)/_components/layout/landing-page-header";
import {Footer} from "@/app/(landing)/_components/layout/footer/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <div className="bg-gradient-to-br from-orange-50 to-pink-100 dark:from-gray-900 dark:to-gray-800">
            {/*<Header/>*/}
            <LandingPageHeader/>
            {children}
            <Footer/>
        </div>
    )
}
