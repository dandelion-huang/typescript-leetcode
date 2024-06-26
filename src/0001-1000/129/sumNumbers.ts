import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, prevSum = 0): number {
    if (!node) {
        return 0
    }

    // 2. pre-order traversal
    const sum = prevSum * 10 + node.val

    if (!node.left && !node.right) {
        return sum
    }

    return dfs(node.left, sum) + dfs(node.right, sum)
}

function sumNumbers(root: TreeNode | null): number {
    return dfs(root)
}

export { sumNumbers }
