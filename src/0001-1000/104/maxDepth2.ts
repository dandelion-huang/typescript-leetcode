import { TreeNode } from 'classes/BinaryTreeNode'

// <Queue, BFS>
// Time: O(n)
// Space: O(n)

function maxDepth(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    const queue: (TreeNode | null)[] = [root]
    let ans = 0

    // 1. bfs
    while (queue.length) {
        const size = queue.length

        for (let i = 0; i < size; ++i) {
            const curNode = queue.shift()!

            if (curNode.left) {
                queue.push(curNode.left)
            }

            if (curNode.right) {
                queue.push(curNode.right)
            }
        }

        ++ans
    }

    return ans
}

export { maxDepth }
