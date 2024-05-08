import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS, Dynamic Programming>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, move: { value: number }): number {
    if (!node) {
        return 0
    }

    node.val += dfs(node.left, move) + dfs(node.right, move)
    move.value += Math.abs(node.val - 1)

    return node.val - 1 // 1 for the coin for the noce
}

function distributeCoins(root: TreeNode | null): number {
    const move = { value: 0 }

    dfs(root, move)

    return move.value
}

export { distributeCoins }
