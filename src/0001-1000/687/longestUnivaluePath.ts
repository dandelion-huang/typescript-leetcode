import { TreeNode } from 'classes/BinaryTreeNode'

// Notice that the path is the relationship between two nodes

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    longestPath: number
}

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper, prevVal?: number): number {
    if (!node) {
        return 0
    }

    const leftLength = dfs(node.left, helper, node.val)
    const rightLength = dfs(node.right, helper, node.val)

    helper.longestPath = Math.max(helper.longestPath, leftLength + rightLength)

    if (node.val !== prevVal) {
        return 0
    }

    return Math.max(leftLength, rightLength) + 1
}

function longestUnivaluePath(root: TreeNode | null): number {
    const helper = { longestPath: 0 }

    dfs(root, helper)

    return helper.longestPath
}

export { longestUnivaluePath }
