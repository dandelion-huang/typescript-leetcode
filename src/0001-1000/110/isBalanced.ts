import { maxDepth } from '0001-1000/104/maxDepth'
import { TreeNode } from 'utils/BinaryTreeNode'

// A height-balanced binary tree is definedas a binary tree in which
// the height of the left and the right subtree of any node differ by not more than 1.

// <Recursion, DFS>
// Time: O(n^2)
//       n for the number of TreeNodes,
//       and maxDepth needs O(n) for each TreeNode if the tree is chain-alike
// Space: O(n)

function isBalanced(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return true
    }

    // 1. dfs
    return (
        Math.abs(maxDepth(root.left) - maxDepth(root.right)) <= 1 &&
        // every child node should be balanced
        isBalanced(root.left) &&
        isBalanced(root.right)
    )
}

export { isBalanced }
