import { TreeNode } from 'utils/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

function minDepth(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    const queue: [TreeNode, number][] = [[root, 1]]

    // 1. bfs
    while (queue.length) {
        const [node, curDepth] = queue.shift()!

        if (!node.left && !node.right) {
            return curDepth
        }

        if (node.left) {
            queue.push([node.left, curDepth + 1])
        }

        if (node.right) {
            queue.push([node.right, curDepth + 1])
        }
    }

    // never reach here
    return -1
}

export { minDepth }
