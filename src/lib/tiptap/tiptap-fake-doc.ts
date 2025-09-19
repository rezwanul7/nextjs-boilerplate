import {faker} from "@faker-js/faker";

export enum BlockType {
    HEADING = "heading",
    PARAGRAPH = "paragraph",
    BLOCKQUOTE = "blockquote",
    CODE = "code",
    LIST = "list",
}

export function getRandomBlockList(
    availableBlocks: BlockType[] = Object.values(BlockType),
    min: number = 1,
    max: number = 5,
    allowRepeats: boolean = true
): BlockType[] {
    const length = faker.number.int({ min, max });

    if (allowRepeats) {
        return Array.from({ length }, () =>
            faker.helpers.arrayElement(availableBlocks)
        );
    }

    // No repeats → sample unique values
    return faker.helpers.arrayElements(availableBlocks, length);
}

export function randomTextWithMarks(minSentences = 2, maxSentences = 5) {
    // Generate 2–5 sentences per paragraph
    const sentencesCount = faker.number.int({ min: minSentences, max: maxSentences });
    const sentences = Array.from({ length: sentencesCount }, () => faker.lorem.sentence());

    // Split sentences into words and add random marks
    const wordsWithMarks = sentences.flatMap((sentence) => {
        const words = sentence.split(" ");

        return words.map((word) => {
            // Randomly apply a mark or leave plain
            const markType = faker.helpers.arrayElement([null, "bold", "italic", "link"]);

            if (markType === "bold") {
                return { type: "text", text: word, marks: [{ type: "bold" }] };
            }
            if (markType === "italic") {
                return { type: "text", text: word, marks: [{ type: "italic" }] };
            }
            if (markType === "link") {
                return {
                    type: "text",
                    text: word,
                    marks: [{ type: "link", attrs: { href: faker.internet.url() } }],
                };
            }

            return { type: "text", text: word };
        });
    });

    // Optionally, insert random spaces/punctuation marks between words
    const spacedWords = wordsWithMarks.flatMap((w, i) => (i < wordsWithMarks.length - 1 ? [w, { type: "text", text: " " }] : [w]));

    return spacedWords;
}

function randomParagraph() {
    return {type: "paragraph", content: randomTextWithMarks(3, 10)};
}

function randomHeading(level: number = 2) {
    return {
        type: "heading",
        attrs: {level},
        content: [{type: "text", text: faker.lorem.sentence()}],
    };
}

function randomBlockquote() {
    return {type: "blockquote", content: [randomParagraph()]};
}

function randomCodeBlock() {
    return {
        type: "codeBlock",
        attrs: {language: faker.helpers.arrayElement(["js", "ts", "html", "css"])},
        content: [
            {
                type: "text",
                text: `// ${faker.hacker.verb()} ${faker.hacker.noun()}\nconsole.log("${faker.hacker.phrase()}");`,
            },
        ],
    };
}

function randomBulletList() {
    const items = Array.from({length: faker.number.int({min: 2, max: 4})}, () => ({
        type: "listItem",
        content: [randomParagraph()],
    }));

    return {type: "bulletList", content: items};
}

export function generateFakeTipTapContent(blocks: BlockType[]) {
    const docBlocks: any[] = [];

    for (const block of blocks) {
        switch (block) {
            case BlockType.HEADING:
                docBlocks.push(randomHeading(faker.number.int({min: 1, max: 3})));
                break;
            case BlockType.PARAGRAPH:
                docBlocks.push(randomParagraph());
                break;
            case BlockType.BLOCKQUOTE:
                docBlocks.push(randomBlockquote());
                break;
            case BlockType.CODE:
                docBlocks.push(randomCodeBlock());
                break;
            case BlockType.LIST:
                docBlocks.push(randomBulletList());
                break;
        }
    }

    return {type: "doc", content: docBlocks};
}


