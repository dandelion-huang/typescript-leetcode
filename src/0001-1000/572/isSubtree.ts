import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(nm)
// Space: O(max(n, m))

function check(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    if (!root && !subRoot) {
        return true
    }

    if (!root || !subRoot) {
        return false
    }

    if (root.val !== subRoot.val) {
        return false
    }

    return check(root.left, subRoot.left) && check(root.right, subRoot.right)
}

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // edge cases
    if (!root || !subRoot) {
        return false
    }

    // 1. dfs
    return check(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
}

export { isSubtree }
