import { TreeNode } from 'classes/BinaryTreeNode'

// <Prefix Sum, DFS, Backtracking>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(
    node: TreeNode | null,
    sum: number,
    targetSum: number,
    prefixSum: Map<number, number>
): number {
    // edge cases
    if (!node) {
        return 0
    }

    let ans = 0

    sum += node.val

    ans = prefixSum.get(sum - targetSum) ?? 0

    // 2.a backtracking - add the path
    prefixSum.set(sum, (prefixSum.get(sum) ?? 0) + 1)

    // 2.b backtracking - collect if it's valid
    ans += dfs(node.left, sum, targetSum, prefixSum)
    ans += dfs(node.right, sum, targetSum, prefixSum)

    // 2.c backtracking - remove the path
    prefixSum.set(sum, (prefixSum.get(sum) ?? 0) - 1)

    return ans
}

function pathSum(root: TreeNode | null, targetSum: number): number {
    const prefix = new Map<number, number>() // Map<sum, count>

    prefix.set(0, 1)

    return dfs(root, 0, targetSum, prefix)
}

export { pathSum }
