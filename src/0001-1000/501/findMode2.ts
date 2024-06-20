import { TreeNode } from 'classes/BinaryTreeNode'
import { type Helper } from './types'
import { updateHelper } from './utils'

// <Iteration, Morris Traversal> (Reference: Leetcode 94)
// Time: O(n)
// Space: O(1)

function iterate(node: TreeNode | null): number[] {
    const helper: Helper = { count: 0, maxCount: 0, mode: 0 }
    const ans: number[] = []
    let predecessor: TreeNode | null = null

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
                updateHelper(node.val, helper, ans)
                predecessor.right = null
                node = node.right
            }
        } else {
            updateHelper(node.val, helper, ans)
            node = node.right
        }
    }

    return ans
}

function findMode(root: TreeNode | null): number[] {
    // edge cases
    if (!root) {
        return []
    }

    return iterate(root)
}

export { findMode }
