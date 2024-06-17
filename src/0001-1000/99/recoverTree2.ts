import { TreeNode } from 'classes/BinaryTreeNode'
import { swap } from 'utils/swapBinaryTreeNodes'
import { updateHelper } from './utils'

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
                ;[prev, p, q] = updateHelper(root, prev, p, q)
                predecessor.right = null
                root = root.right
            }
        } else {
            ;[prev, p, q] = updateHelper(root, prev, p, q)
            root = root.right
        }
    }

    swap(p!, q!) // constraints: p and q will exist in the BST
}

export { recoverTree }
