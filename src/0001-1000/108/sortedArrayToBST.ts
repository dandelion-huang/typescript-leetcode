import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(nums: number[], left: number, right: number): TreeNode | null {
    if (left > right) {
        return null
    }

    const mid = (left + right) >>> 1
    const root = new TreeNode(nums[mid])

    root.left = dfs(nums, left, mid - 1)
    root.right = dfs(nums, mid + 1, right)

    return root
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
    // edge cases
    if (!nums.length) {
        return null
    }

    return dfs(nums, 0, nums.length - 1)
}

export { sortedArrayToBST }
