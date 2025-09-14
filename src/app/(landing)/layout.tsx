import LandingPageHeader from "@/app/(landing)/_components/layout/landing-page-header";
import {Footer} from "@/app/(landing)/_components/layout/footer/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            {/*<Header/>*/}
            <LandingPageHeader/>
            {children}
            <Footer/>
        </>
    )
}
