import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS, Backtracking>
// Time: O(n^2)
// Space: O(n)

function pathSum(root: TreeNode | null, targetSum: number): number[][] {
    // edge cases
    if (!root) {
        return []
    }

    const ans: number[][] = []
    const path: number[] = []

    // 1. dfs
    function dfs(node: TreeNode | null, sum: number = 0): void {
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

        dfs(node.left, sum)
        dfs(node.right, sum)

        // 2.c backtracking - remove the path
        path.pop()
    }

    dfs(root)

    return ans
}

export { pathSum }
