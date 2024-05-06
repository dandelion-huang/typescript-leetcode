import { TreeNode } from 'utils/BinaryTreeNode'

// Notice that the path is the relationship between two nodes

// <DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, longestPath: { value: number }, prevVal?: number): number {
    if (!node) {
        return 0
    }

    const leftLength = dfs(node.left, longestPath, node.val)
    const rightLength = dfs(node.right, longestPath, node.val)

    longestPath.value = Math.max(longestPath.value, leftLength + rightLength)

    if (node.val !== prevVal) {
        return 0
    }

    return Math.max(leftLength, rightLength) + 1
}

function longestUnivaluePath(root: TreeNode | null): number {
    const longestPath = { value: 0 }

    dfs(root, longestPath)

    return longestPath.value
}

export { longestUnivaluePath }
