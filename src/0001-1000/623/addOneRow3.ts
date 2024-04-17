import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, val: number, depth: number): TreeNode | null {
    // edge cases
    if (!node) {
        return node
    }

    if (depth <= 1) {
        return new TreeNode(val, node, null)
    }

    // 2. recursion
    if (depth === 2) {
        node.left = new TreeNode(val, node.left, null)
        node.right = new TreeNode(val, null, node.right)
    } else {
        node.left = dfs(node.left, val, depth - 1)
        node.right = dfs(node.right, val, depth - 1)
    }

    return node
}

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    return dfs(root, val, depth)
}

export { addOneRow }
