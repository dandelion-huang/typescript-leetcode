import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function check(left: TreeNode | null, right: TreeNode | null): boolean {
    const queue: [TreeNode | null, TreeNode | null][] = [[left, right]]

    while (queue.length) {
        // compare if the left and right are of the same value
        const [nodeA, nodeB] = queue.shift()!

        if (!nodeA && !nodeB) {
            continue
        }

        if (!nodeA || !nodeB || nodeA.val !== nodeB.val) {
            return false
        }

        queue.push([nodeA.left, nodeB.right])
        queue.push([nodeA.right, nodeB.left])
    }

    return true
}

function isSymmetric(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return true
    }

    return check(root.left, root.right)
}

export { isSymmetric }
