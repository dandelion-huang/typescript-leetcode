import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

type Helper = { minDiff: number; prev: number }

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper): void {
    if (!node) {
        return
    }

    dfs(node.left, helper)

    // 2. inorder traversal
    if (helper.prev === -1) {
        helper.prev = node.val
    } else {
        helper.minDiff = Math.min(helper.minDiff, node.val - helper.prev)
        helper.prev = node.val
    }

    dfs(node.right, helper)
}

function getMinimumDifference(root: TreeNode | null): number {
    const helper: Helper = { minDiff: Infinity, prev: -1 }

    dfs(root, helper)

    return helper.minDiff
}

export { getMinimumDifference }
