import { Node } from 'classes/N-aryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: Node): number[][] {
    const ans: number[][] = []
    const queue: Node[] = [node]

    // 2. level-order traversal
    while (queue.length) {
        const curLevel: number[] = []
        const size = queue.length

        for (let i = 0; i < size; ++i) {
            const curNode = queue.shift()!

            curLevel.push(curNode.val)
            queue.push(...curNode.children)
        }

        ans.push(curLevel)
    }

    return ans
}

function levelOrder(root: Node | null): number[][] {
    // edge cases
    if (!root) {
        return []
    }

    return bfs(root)
}

export { levelOrder }
