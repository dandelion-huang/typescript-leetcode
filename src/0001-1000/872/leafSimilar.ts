import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n1 + n2)
// Space: O(n1 + n2)

// 1. dfs
function dfs(node: TreeNode | null, leaves: TreeNode[]): void {
    if (!node) {
        return
    }

    // 2. pre-order traversal
    if (node.left === null && node.right === null) {
        leaves.push(node)
    }

    dfs(node.left, leaves)
    dfs(node.right, leaves)
}

function getLeaves(root: TreeNode | null): TreeNode[] {
    // edge cases
    if (!root) {
        return []
    }

    const leaves: TreeNode[] = []

    dfs(root, leaves)

    return leaves
}

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
    // edge cases
    if (!root1 || !root2) {
        return false
    }

    const leaves1 = getLeaves(root1)
    const leaves2 = getLeaves(root2)

    // compare the leaves
    return (
        leaves1.length === leaves2.length &&
        leaves1.every((leaf1, index) => leaf1.val === leaves2[index].val)
    )
}

export { leafSimilar }
