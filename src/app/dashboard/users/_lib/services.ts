'use server';

import {currentUser} from "@clerk/nextjs/server";
import prisma from "@/lib/prisma";

export async function getOrCreateCurrentUser() {
    const user = await currentUser();
    if (!user) throw new Error("Current user not found");

    return prisma.user.upsert({
        where: {clerkId: user.id},
        update: {
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            imageUrl: user.imageUrl,
        },
        create: {
            clerkId: user.id,
            email: user.emailAddresses[0].emailAddress,
            firstName: user.firstName,
            lastName: user.lastName,
            imageUrl: user.imageUrl,
        },
    });
}
