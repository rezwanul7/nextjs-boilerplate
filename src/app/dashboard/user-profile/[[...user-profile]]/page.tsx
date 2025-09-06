import { UserProfile } from '@clerk/nextjs'

const UserProfilePage = () => {
    return (
        <div className="m-auto p-6">
            <UserProfile />
        </div>
    )
}

export default UserProfilePage