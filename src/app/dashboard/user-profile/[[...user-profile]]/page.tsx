import {UserProfile} from '@clerk/nextjs'
import type {Metadata} from "next";

export const metadata: Metadata = {
    title: 'Account'
};

const UserProfilePage = () => {
    return (
        <div className="m-auto p-6">
            <UserProfile />
        </div>
    )
}

export default UserProfilePage