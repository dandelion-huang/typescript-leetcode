import { TreeNode } from 'classes/BinaryTreeNode'

// Notice that the root is the root of the BST
// So we can optimize the solution on the basis of leetcode 236

// <Recursion, DFS>
// Time: O(n)
// Space: O(1)

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    // edge cases
    if (root === null || root === p || root === q) {
        return root
    }

    if (p!.val < root.val && q!.val < root.val) {
        return lowestCommonAncestor(root.left, p, q)
    }

    if (p!.val > root.val && q!.val > root.val) {
        return lowestCommonAncestor(root.right, p, q)
    }

    return root
}

export { lowestCommonAncestor }
