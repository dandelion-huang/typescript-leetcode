import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS, Backtracking>
// Time: O(n^2)
// Space: O(n)

// 1. dfs
function dfs(
    node: TreeNode | null,
    ans: number[][],
    path: number[],
    targetSum: number,
    sum = 0,
): void {
    if (!node) {
        return
    }

    // 2.a backtracking - add the path
    path.push(node.val)
    sum += node.val

    // 2.b backtracking - collect if it's valid
    if (!node.left && !node.right && sum === targetSum) {
        ans.push(path.slice())
    }

    dfs(node.left, ans, path, targetSum, sum)
    dfs(node.right, ans, path, targetSum, sum)

    // 2.c backtracking - remove the path
    path.pop()
}

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    // edge cases
    if (!root) {
        return []
    }

    const ans: number[][] = []
    const path: number[] = []

    dfs(root, ans, path, targetSum)

    return ans
}

export { pathSum }
