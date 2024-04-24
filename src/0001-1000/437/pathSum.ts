import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n^2)
// Space: O(n)

function rootSum(root: TreeNode | null, targetSum: number): number {
    if (!root) {
        return 0
    }

    let sum = 0

    if (root.val === targetSum) {
        ++sum
    }

    sum += rootSum(root.left, targetSum - root.val)
    sum += rootSum(root.right, targetSum - root.val)

    return sum
}

function pathSum(root: TreeNode | null, targetSum: number): number {
    // edge cases
    if (!root) {
        return 0
    }

    // 1. dfs
    let ans = rootSum(root, targetSum)

    ans += pathSum(root.left, targetSum)
    ans += pathSum(root.right, targetSum)

    return ans
}

export { pathSum }
