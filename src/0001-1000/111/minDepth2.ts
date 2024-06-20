import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): number {
    const queue: [TreeNode, number][] = [[node, 1]]

    while (queue.length) {
        const [curNode, curDepth] = queue.shift()!

        if (!curNode.left && !curNode.right) {
            return curDepth
        }

        if (curNode.left) {
            queue.push([curNode.left, curDepth + 1])
        }

        if (curNode.right) {
            queue.push([curNode.right, curDepth + 1])
        }
    }

    return -1 // never reach here
}

function minDepth(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    return bfs(root)
}

export { minDepth }
