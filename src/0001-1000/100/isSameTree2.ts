import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(min(n, m))
// Space: O(min(n, m))

// 1. bfs
function bfs(p: TreeNode, q: TreeNode): boolean {
    const queue: [TreeNode | null, TreeNode | null][] = [[p, q]]

    while (queue.length) {
        const [nodeP, nodeQ] = queue.shift()!

        // compare the val of the nodes
        if (!nodeP && !nodeQ) {
            continue
        }

        if (!nodeP || !nodeQ) {
            return false
        }

        if (nodeP.val !== nodeQ.val) {
            return false
        }

        queue.push([nodeP.left, nodeQ.left])
        queue.push([nodeP.right, nodeQ.right])
    }

    return true
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // edge cases
    if (!p || !q) {
        return p === q
    }

    return bfs(p, q)
}

export { isSameTree }
