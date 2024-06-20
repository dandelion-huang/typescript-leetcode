import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): number {
    const queue: TreeNode[] = [node]
    let sum = 0

    while (queue.length) {
        sum = 0

        const size = queue.length

        for (let i = 0; i < size; ++i) {
            const curNode = queue.shift()!

            sum += curNode.val

            if (curNode.left) {
                queue.push(curNode.left)
            }

            if (curNode.right) {
                queue.push(curNode.right)
            }
        }
    }

    return sum
}

function deepestLeavesSum(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    return bfs(root)
}

export { deepestLeavesSum }
