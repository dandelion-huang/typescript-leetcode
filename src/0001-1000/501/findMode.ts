import { TreeNode } from 'classes/BinaryTreeNode'
import { type Helper } from './types'
import { updateHelper } from './utils'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper, ans: number[]): void {
    if (!node) {
        return
    }

    dfs(node.left, helper, ans)
    updateHelper(node.val, helper, ans)
    dfs(node.right, helper, ans)
}

function findMode(root: TreeNode | null): number[] {
    const helper: Helper = { count: 0, maxCount: 0, mode: 0 }
    const ans: number[] = []

    dfs(root, helper, ans)

    return ans
}

export { findMode }
