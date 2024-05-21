import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    let ans: TreeNode | null = null

    // 1. dfs
    function dfs(node: TreeNode | null): boolean {
        // edge cases
        if (!node) {
            return false
        }

        const leftChild = dfs(node.left)
        const rightChild = dfs(node.right)
        const isAncestor = node.val === p?.val || node.val === q?.val

        // 2. post-order traversal
        if ((leftChild && rightChild) || ((leftChild || rightChild) && isAncestor)) {
            ans = node
        }

        return leftChild || rightChild || isAncestor
    }

    dfs(root)

    return ans
}

export { lowestCommonAncestor }
