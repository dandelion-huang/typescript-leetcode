import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    node: TreeNode | null
}

// 1. dfs
function dfs(
    node: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
    helper: Helper,
): boolean {
    // edge cases
    if (!node) {
        return false
    }

    const leftChild = dfs(node.left, p, q, helper)
    const rightChild = dfs(node.right, p, q, helper)
    const isAncestor = node.val === p?.val || node.val === q?.val

    // 2. post-order traversal
    if ((leftChild && rightChild) || ((leftChild || rightChild) && isAncestor)) {
        helper.node = node
    }

    return leftChild || rightChild || isAncestor
}

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    const helper: Helper = { node: null }

    dfs(root, p, q, helper)

    return helper.node
}

export { lowestCommonAncestor }
