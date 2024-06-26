import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    // edge cases
    if (!root) {
        return root
    }

    // 1. dfs
    if (root.val < low) {
        return trimBST(root.right, low, high)
    }

    if (root.val > high) {
        return trimBST(root.left, low, high)
    }

    root.left = trimBST(root.left, low, high)
    root.right = trimBST(root.right, low, high)

    return root
}

export { trimBST }
