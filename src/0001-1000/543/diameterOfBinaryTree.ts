import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    maxDiameter: number
}

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper): number {
    if (!node) {
        return 0
    }

    const leftLength = dfs(node.left, helper)
    const rightLength = dfs(node.right, helper)

    helper.maxDiameter = Math.max(helper.maxDiameter, leftLength + rightLength)

    return Math.max(leftLength, rightLength) + 1
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    const helper = { maxDiameter: 0 }

    dfs(root, helper)

    return helper.maxDiameter
}

export { diameterOfBinaryTree }
