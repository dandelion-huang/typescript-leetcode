import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // edge cases
    if (!root) {
        return false
    }

    if (!root.left && !root.right) {
        return root.val === targetSum
    }

    // 1. dfs
    return (
        hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
    )
}

export { hasPathSum }
