import {Logo} from "@/app/(landing)/_components/layout/navbar/logo";
import {NavMenu} from "@/app/(landing)/_components/layout/navbar/nav-menu";
import {SignedIn, SignedOut, SignInButton, SignUpButton, UserButton} from "@clerk/nextjs";
import {Button} from "@/components/ui/button";
import {NavigationSheet} from "@/app/(landing)/_components/layout/navbar/navigation-sheet";

export default function Header() {
    return (
        <header className="pt-6">
            <nav className="mx-4 h-16 bg-background border dark:border-slate-700/70 max-w-screen-xl rounded-full">
                <div className="h-full flex items-center justify-between mx-auto px-4">
                    <Logo variant={"dark"}/>
                    {/* Desktop Menu */}
                    <NavMenu className="hidden md:block"/>
                    <div className="flex items-center gap-3">
                        <SignedOut>
                            <SignInButton>
                                <Button
                                    variant="outline"
                                    className="hidden sm:inline-flex rounded-full"
                                >
                                    Sign In
                                </Button>
                            </SignInButton>
                            <SignUpButton>
                                <Button className="rounded-full">Get Started</Button>
                            </SignUpButton>
                        </SignedOut>
                        <SignedIn>
                            <UserButton/>
                        </SignedIn>
                        {/* Mobile Menu */}
                        <div className="md:hidden">
                            <NavigationSheet/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}