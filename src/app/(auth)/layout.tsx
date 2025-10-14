import {Logo} from "@/app/(landing)/_components/layout/navbar/logo";
import Link from "next/link";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            <nav>
                <div className="flex h-16 items-center justify-between px-6 max-w-7xl mx-auto">
                    <Link href="/">
                        <Logo/>
                    </Link>
                </div>
            </nav>

            <div className="flex w-full items-center justify-center py-16">
                {children}
            </div>
        </>
    )
}
