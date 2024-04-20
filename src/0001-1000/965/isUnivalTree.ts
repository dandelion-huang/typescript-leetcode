import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function isUnivalTree(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return false // empty tree has no value so it's not unival
    }

    // 1. dfs
    if (root.left) {
        if (root.val !== root.left.val || !isUnivalTree(root.left)) {
            return false
        }
    }

    if (root.right) {
        if (root.val !== root.right.val || !isUnivalTree(root.right)) {
            return false
        }
    }

    return true
}

export { isUnivalTree }
