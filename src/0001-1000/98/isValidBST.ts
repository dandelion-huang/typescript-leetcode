import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function validateHelper(root: TreeNode | null, min: number, max: number): boolean {
    if (!root) {
        return true
    }

    if (root.val <= min || root.val >= max) {
        return false
    }

    return validateHelper(root.left, min, root.val) && validateHelper(root.right, root.val, max)
}

function isValidBST(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return false
    }

    return validateHelper(root, -Infinity, Infinity)
}

export { isValidBST }
