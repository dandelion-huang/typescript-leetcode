import { TreeNode } from 'classes/BinaryTreeNode'
import { swap } from 'utils/swapBinaryTreeNodes'
import { helper } from './utils'

// <Morris Traversal> (Reference: Leetcode 94)
// Time: O(n)
// Space: O(1)

/**
 *  Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
    let predecessor: TreeNode | null = null
    let prev: TreeNode | null = null
    let p: TreeNode | null = null
    let q: TreeNode | null = null

    // iteration
    while (root) {
        if (root.left) {
            predecessor = root.left

            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right
            }

            if (!predecessor.right) {
                predecessor.right = root
                root = root.left
            } else {
                ;[root, prev, p, q] = helper(root, prev, p, q)
                predecessor.right = null
            }
        } else {
            ;[root, prev, p, q] = helper(root, prev, p, q)
        }
    }

    swap(p!, q!) // constraints: p and q will exist in the BST
}

export { recoverTree }
