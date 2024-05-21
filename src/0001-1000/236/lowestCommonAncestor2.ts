import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS, HashTable>
// Time: O(n)
// Space: O(n)

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    // constraints: all Node.val are unique
    const parent = new Map<number, TreeNode>()
    const visited = new Map<number, boolean>()

    // 1. dfs
    function dfs(node: TreeNode | null): void {
        // edge cases
        if (!node) {
            return
        }

        if (node.left) {
            parent.set(node.left.val, node)
            dfs(node.left)
        }

        if (node.right) {
            parent.set(node.right.val, node)
            dfs(node.right)
        }
    }

    dfs(root)

    // find the lowest common ancestor
    while (p) {
        visited.set(p.val, true)
        p = parent.get(p.val) ?? null
    }

    while (q) {
        if (visited.get(q.val)) {
            return q
        }

        q = parent.get(q.val) ?? null
    }

    return null
}

export { lowestCommonAncestor }
