import {NextRequest, NextResponse} from "next/server";
import {seedPosts} from "@/app/dashboard/posts/_lib/seeder";
import {getOrCreateCurrentUser} from "@/app/dashboard/users/_lib/services";

export async function GET(_: NextRequest) {
    const user = await getOrCreateCurrentUser();
    await seedPosts(user.id, 35, true);

    return NextResponse.json({
        message: "Seeded 35 posts for authorId=cmfa1dn2m0000p0kombiar3l0",
    });
}