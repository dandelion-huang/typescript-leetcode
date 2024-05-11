import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, maxSum: { value: number }): number {
    if (!node) {
        return 0
    }

    // if negative, treat it as 0
    const leftSum = Math.max(dfs(node.left, maxSum), 0)
    const rightSum = Math.max(dfs(node.right, maxSum), 0)
    const sum = node.val + leftSum + rightSum

    maxSum.value = Math.max(maxSum.value, sum)

    return node.val + Math.max(leftSum, rightSum)
}

function maxPathSum(root: TreeNode | null): number {
    const maxSum = { value: -Infinity }

    dfs(root, maxSum)

    return maxSum.value
}

export { maxPathSum }
