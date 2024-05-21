import { TreeNode } from 'classes/BinaryTreeNode'

// If r for robbed, s for safe
// Consider two conditions:
// a. node n is robbed
//    r(n) = s(left) + s(right)
// b. node n is safe
//    s(n) = max(r(left), s(left)) + max(r(right), s(right))

// <Recursion, DFS, Dynamic Programming, HashTable>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(
    node: TreeNode | null,
    robbed: Map<TreeNode | null, number>,
    safe: Map<TreeNode | null, number>,
): void {
    if (!node) {
        return
    }

    // 2. post-order traversal
    dfs(node.left, robbed, safe)
    dfs(node.right, robbed, safe)
    robbed.set(node, node.val + (safe.get(node.left) ?? 0) + (safe.get(node.right) ?? 0))
    safe.set(
        node,
        Math.max(robbed.get(node.left) ?? 0, safe.get(node.left) ?? 0) +
            Math.max(robbed.get(node.right) ?? 0, safe.get(node.right) ?? 0),
    )
}

function rob(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    const robbed = new Map<TreeNode | null, number>() // Map<node, robbed>
    const safe = new Map<TreeNode | null, number>() // Map<node, safe>

    dfs(root, robbed, safe)

    return Math.max(robbed.get(root) ?? 0, safe.get(root) ?? 0)
}

export { rob }
