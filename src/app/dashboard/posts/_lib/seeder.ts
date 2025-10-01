import {faker} from "@faker-js/faker";
import {type Category, CategoryEnum} from "./category.utils";
import {prisma} from "@/lib/prisma";
import {generateFakeTipTapContent, getRandomBlockList} from "@/lib/tiptap/tiptap-fake-doc";


/**
 * Seed posts for a specific author.
 * @param authorId - The ID of the author to assign to posts
 * @param count - Number of posts to generate
 * @param truncate
 */
export async function seedPosts(authorId: string, count = 10, truncate = false) {

    if (truncate) {
        await prisma.$executeRawUnsafe(`TRUNCATE TABLE "Post" RESTART IDENTITY CASCADE`)
    }

    const categories = Object.values(CategoryEnum);

    const postsData = Array.from({length: count}).map(() => {
        const category = faker.helpers.arrayElement(categories) as Category;
        const title = faker.lorem.sentence();
        // Remove trailing dot (if any) before slugifying
        const cleanedTitle = title.replace(/\.$/, '');
        const slug = faker.helpers.slugify(cleanedTitle).toLowerCase();
        // const content = faker.lorem.paragraphs(faker.number.int({min: 1, max: 5}));
        const randomBlocks = getRandomBlockList(undefined, 2, 6);
        // e.g. ["heading", "paragraph", "code"]
        const content = generateFakeTipTapContent(randomBlocks);

        const published = faker.datatype.boolean();
        const meta = {
            description: faker.lorem.sentence(),
            image: faker.image.url(),
        };

        return {
            title,
            slug,
            content,
            category,
            published,
            meta,
            authorId,
            createdAt: faker.date.past(),
            updatedAt: new Date(),
        };
    });

    const created = await prisma.post.createMany({
        data: postsData,
        skipDuplicates: true, // avoids conflicts with unique slugs
    });

    console.log(`Seeded ${created.count} posts for authorId=${authorId}`);
}
