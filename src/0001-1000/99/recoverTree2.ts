import { TreeNode } from 'classes/BinaryTreeNode'
import { swap } from 'utils/swap/swapBinaryTreeNodes'
import { updateHelper } from './utils'

// <Iteration, Morris Traversal> (Reference: Leetcode 94)
// Time: O(n)
// Space: O(1)

function iterate(node: TreeNode | null): [TreeNode | null, TreeNode | null] {
    let predecessor: TreeNode | null = null
    let prev: TreeNode | null = null
    let p: TreeNode | null = null
    let q: TreeNode | null = null

    while (node) {
        if (node.left) {
            predecessor = node.left

            while (predecessor.right && predecessor.right !== node) {
                predecessor = predecessor.right
            }

            if (!predecessor.right) {
                predecessor.right = node
                node = node.left
            } else {
                ;[prev, p, q] = updateHelper(node, prev, p, q)
                predecessor.right = null
                node = node.right
            }
        } else {
            ;[prev, p, q] = updateHelper(node, prev, p, q)
            node = node.right
        }
    }

    return [p, q]
}

/**
 *  Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null) {
    const [p, q] = iterate(root)

    swap(p!, q!) // constraints: p and q will exist in the BST
}

export { recoverTree }
