import {SignIn} from '@clerk/nextjs'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Sign In'
};

export default function Page() {
    return (
        <div className="min-h-screen flex w-full items-center justify-center">
            <SignIn/>
        </div>
    )
}