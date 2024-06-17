import { TreeNode } from 'classes/BinaryTreeNode'
import { type Helper } from './types'
import { updateHelper } from './utils'

// <Morris Traversal> (Reference: Leetcode 94)
// Time: O(n)
// Space: O(1)

function findMode(root: TreeNode | null): number[] {
    const helper: Helper = { count: 0, maxCount: 0, mode: 0 }
    const ans: number[] = []
    let predecessor: TreeNode | null = null

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
                updateHelper(root.val, helper, ans)
                predecessor.right = null
                root = root.right
            }
        } else {
            updateHelper(root.val, helper, ans)
            root = root.right
        }
    }

    return ans
}

export { findMode }
