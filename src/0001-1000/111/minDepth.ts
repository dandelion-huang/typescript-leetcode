import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function minDepth(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    if (!root.left && !root.right) {
        return 1 // 1 for root
    }

    let ans = Infinity

    // 1. dfs
    if (root.left) {
        ans = Math.min(ans, minDepth(root.left))
    }

    if (root.right) {
        ans = Math.min(ans, minDepth(root.right))
    }

    return ans + 1 // 1 for root
}

export { minDepth }
