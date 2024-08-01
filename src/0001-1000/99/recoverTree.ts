import { TreeNode } from 'classes/BinaryTreeNode'
import { swap } from 'utils/swap/swapBinaryTreeNodes'
import { updateHelper } from './utils'

// <Iteration, DFS, Stack>
// Time: O(n)
// Space: O(n)

// 1. dfs
function iterate(node: TreeNode | null): [TreeNode | null, TreeNode | null] {
    const stack: TreeNode[] = []
    let prev: TreeNode | null = null
    let p: TreeNode | null = null
    let q: TreeNode | null = null

    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()!
        ;[prev, p, q] = updateHelper(node, prev, p, q)
        node = node.right
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
