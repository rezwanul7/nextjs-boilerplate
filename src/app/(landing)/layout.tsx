import Header2 from "@/app/(landing)/_components/layout/header2";
import {Footer} from "@/app/(landing)/_components/layout/footer/footer";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            {/*<Header/>*/}
            <Header2/>
            {children}
            <Footer/>
        </>
    )
}
