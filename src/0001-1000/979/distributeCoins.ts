import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS, Dynamic Programming>
// Time: O(n)
// Space: O(n)

type Helper = { move: number }

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper): number {
    if (!node) {
        return 0
    }

    node.val += dfs(node.left, helper) + dfs(node.right, helper)
    helper.move += Math.abs(node.val - 1)

    return node.val - 1 // 1 for the coin for the noce
}

function distributeCoins(root: TreeNode | null): number {
    const helper = { move: 0 }

    dfs(root, helper)

    return helper.move
}

export { distributeCoins }
