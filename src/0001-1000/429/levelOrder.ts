import { Node } from 'utils/N-aryTreeNode'

// Time: O(n)
// Space: O(n)

function levelOrder(root: Node | null): number[][] {
    const ans: number[][] = []

    // 1. bfs
    function bfs(node: Node | null): void {
        // edge cases
        if (node === null) {
            return
        }

        // 2. level-order traversal
        const queue: Node[] = [node]

        while (queue.length > 0) {
            const curLevel: number[] = []
            const size = queue.length

            for (let i = 0; i < size; ++i) {
                const curNode = queue.shift()!

                curLevel.push(curNode.val)
                queue.push(...curNode.children)
            }

            ans.push(curLevel)
        }
    }

    bfs(root)

    return ans
}

export { levelOrder }
