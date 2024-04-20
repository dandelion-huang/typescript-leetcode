import { TreeNode } from 'utils/BinaryTreeNode'

// A height-balanced binary tree is definedas a binary tree in which
// the height of the left and the right subtree of any node differ by not more than 1.

// <Bottom-Top Recursion, DFS>
// Time: O(n)
//       in this case, just call getHeight for each TreeNode once
//       use -1 to mark the tree is not balanced
// Space: O(n)

function getHeight(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    // 1. dfs
    const leftHeight = getHeight(root.left)

    if (leftHeight === -1) {
        return -1
    }

    const rightHeight = getHeight(root.right)

    if (rightHeight === -1 || Math.abs(leftHeight - rightHeight) > 1) {
        return -1
    }

    return Math.max(leftHeight, rightHeight) + 1
}

function isBalanced(root: TreeNode | null): boolean {
    return getHeight(root) !== -1
}

export { isBalanced }
