import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function maxDepth(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    // 1. dfs
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}

export { maxDepth }
