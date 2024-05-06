import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(root: TreeNode | null, maxDiameter: { value: number }): number {
    if (!root) {
        return 0
    }

    const left = dfs(root.left, maxDiameter)
    const right = dfs(root.right, maxDiameter)

    maxDiameter.value = Math.max(maxDiameter.value, left + right)

    return Math.max(left, right) + 1
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    const maxDiameter = { value: 0 }

    dfs(root, maxDiameter)

    return maxDiameter.value
}

export { diameterOfBinaryTree }
