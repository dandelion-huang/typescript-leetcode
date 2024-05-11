import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null
): TreeNode | null {
    // edge cases
    if (root === null || root === p || root === q) {
        return root
    }

    const leftChild = lowestCommonAncestor(root.left, p, q)
    const rightChild = lowestCommonAncestor(root.right, p, q)

    // constraints: p and q will exist in the BST
    if (!leftChild) {
        return rightChild
    }

    if (!rightChild) {
        return leftChild
    }

    return root
}

export { lowestCommonAncestor }
