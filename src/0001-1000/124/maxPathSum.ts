import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    maxSum: number
}

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper): number {
    if (!node) {
        return 0
    }

    // if negative, treat it as 0
    const leftSum = Math.max(dfs(node.left, helper), 0)
    const rightSum = Math.max(dfs(node.right, helper), 0)
    const sum = node.val + leftSum + rightSum

    helper.maxSum = Math.max(helper.maxSum, sum)

    return node.val + Math.max(leftSum, rightSum)
}

function maxPathSum(root: TreeNode | null): number {
    const helper = { maxSum: -Infinity }

    dfs(root, helper)

    return helper.maxSum
}

export { maxPathSum }
