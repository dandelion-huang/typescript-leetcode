import { TreeNode } from 'utils/BinaryTreeNode'

// <DFS>
// Time: O(n)
// Space: O(n)

function sumNumbers(root: TreeNode | null): number {
    // 1. dfs
    function dfs(node: TreeNode | null, prevSum: number = 0): number {
        if (node === null) {
            return 0
        }

        // 2. pre-order traversal
        const sum = prevSum * 10 + node.val

        if (node.left === null && node.right === null) {
            return sum
        }

        return dfs(node.left, sum) + dfs(node.right, sum)
    }

    return dfs(root)
}

export { sumNumbers }
