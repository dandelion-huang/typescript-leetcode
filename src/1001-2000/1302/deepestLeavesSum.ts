import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    maxDepth: number
    sum: number
}

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper, depth = 0) {
    // edge cases
    if (!node) {
        return
    }

    // 2. pre-order traversal
    if (depth > helper.maxDepth) {
        helper.maxDepth = depth
        helper.sum = node.val
    } else if (depth === helper.maxDepth) {
        helper.sum += node.val
    }

    dfs(node.left, helper, depth + 1)
    dfs(node.right, helper, depth + 1)
}

function deepestLeavesSum(root: TreeNode | null): number {
    const helper: Helper = { maxDepth: -1, sum: 0 }

    dfs(root, helper)

    return helper.sum
}

export { deepestLeavesSum }
