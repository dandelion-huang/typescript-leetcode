import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(min(n, m))
// Space: O(min(n, m))

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // edge cases
    if (!p && !q) {
        return true
    }

    if (!p || !q) {
        return false
    }

    // compare the val of the nodes
    if (p.val !== q.val) {
        return false
    }

    // 1. dfs
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

export { isSameTree }