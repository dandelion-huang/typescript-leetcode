import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(root: TreeNode | null, min: number, max: number): boolean {
    if (!root) {
        return true
    }

    if (root.val <= min || root.val >= max) {
        return false
    }

    return dfs(root.left, min, root.val) && dfs(root.right, root.val, max)
}

function isValidBST(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return false
    }

    return dfs(root, -Infinity, Infinity)
}

export { isValidBST }
