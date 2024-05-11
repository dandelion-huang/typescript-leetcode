import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(root: TreeNode | null, maxDiameter: { value: number }): number {
    if (!root) {
        return 0
    }

    const leftLength = dfs(root.left, maxDiameter)
    const rightLength = dfs(root.right, maxDiameter)

    maxDiameter.value = Math.max(maxDiameter.value, leftLength + rightLength)

    return Math.max(leftLength, rightLength) + 1
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    const maxDiameter = { value: 0 }

    dfs(root, maxDiameter)

    return maxDiameter.value
}

export { diameterOfBinaryTree }
