export function getRoundRobinItem<T>(postId: number, dummyItems: T[]): T {
    if (dummyItems.length === 0) {
        throw new Error("dummyItems array cannot be empty")
    }
    const index = postId % dummyItems.length
    return dummyItems[index]
}