import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS, Dynamic Programming>
// Time: O(n)
// Space: O(n)

// 1. dfs, dp
function dp(node: TreeNode | null): [number, number] {
    if (!node) {
        return [0, 0]
    }

    const left = dp(node.left)
    const right = dp(node.right)
    const robbed = node.val + left[1] + right[1]
    const safe = Math.max(...left) + Math.max(...right)

    return [robbed, safe]
}

function rob(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    const ans = dp(root)

    return Math.max(...ans)
}

export { rob }
