import { TreeNode } from 'utils/BinaryTreeNode'

// <DFS>
// Time: O(n)
// Space: O(n)

function deepestLeavesSum(root: TreeNode | null): number {
    let sum = 0
    let maxDepth = -1

    // 1. dfs
    function dfs(node: TreeNode | null, depth: number = 0): void {
        // edge cases
        if (!node) {
            return
        }

        // 2. pre-order traversal
        if (depth > maxDepth) {
            maxDepth = depth
            sum = node.val
        } else if (depth === maxDepth) {
            sum += node.val
        }

        dfs(node.left, depth + 1)
        dfs(node.right, depth + 1)
    }

    dfs(root)

    return sum
}

export { deepestLeavesSum }
