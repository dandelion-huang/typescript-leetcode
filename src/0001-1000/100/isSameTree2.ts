import { TreeNode } from 'classes/BinaryTreeNode'

// <BFS, Queue>
// Time: O(min(n, m))
// Space: O(min(n, m))

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // edge cases
    if (!p || !q) {
        return p === q
    }

    const queue: Array<Array<TreeNode | null>> = [[p, q]]

    // 1. bfs
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

export { isSameTree }
