import {PrismaClient} from "@prisma/client";
import {envConfig} from "@/config/env";

const globalForPrisma = global as unknown as { prisma: PrismaClient | undefined };

export const prisma =
    globalForPrisma.prisma ??
    new PrismaClient(envConfig.debug ? {
        log: ["query", "error", "warn"], // optional
    } : undefined);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
