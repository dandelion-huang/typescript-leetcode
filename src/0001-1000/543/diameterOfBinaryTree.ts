import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, maxDiameter: { value: number }): number {
    if (!node) {
        return 0
    }

    const leftLength = dfs(node.left, maxDiameter)
    const rightLength = dfs(node.right, maxDiameter)

    maxDiameter.value = Math.max(maxDiameter.value, leftLength + rightLength)

    return Math.max(leftLength, rightLength) + 1
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    const maxDiameter = { value: 0 }

    dfs(root, maxDiameter)

    return maxDiameter.value
}

export { diameterOfBinaryTree }
