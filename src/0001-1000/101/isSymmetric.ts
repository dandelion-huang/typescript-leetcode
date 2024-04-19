import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function isSymmetric(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return true
    }

    // 1. dfs
    function check(left: TreeNode | null, right: TreeNode | null): boolean {
        // compare if the left and right are of the same value
        if (!left && !right) {
            return true
        }

        if (!left || !right) {
            return false
        }

        return (
            left.val === right.val && check(left.left, right.right) && check(left.right, right.left)
        )
    }

    return check(root.left, root.right)
}

export { isSymmetric }
