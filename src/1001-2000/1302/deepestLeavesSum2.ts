import { TreeNode } from 'classes/BinaryTreeNode'

// <BFS, Queue>
// Time: O(n)
// Space: O(n)

function deepestLeavesSum(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    const queue: Array<TreeNode | null> = [root]
    let sum = 0

    // 1. bfs
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

export { deepestLeavesSum }
