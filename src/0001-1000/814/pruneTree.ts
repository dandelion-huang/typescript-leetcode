import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function pruneTree(root: TreeNode | null): TreeNode | null {
    // edge cases
    if (!root) {
        return null
    }

    root.left = pruneTree(root.left)
    root.right = pruneTree(root.right)

    // 2. post-order traversal
    if (!root.left && !root.right && root.val === 0) {
        return null
    }

    return root
}

export { pruneTree }
