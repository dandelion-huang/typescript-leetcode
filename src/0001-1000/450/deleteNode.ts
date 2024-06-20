import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    // edge cases
    if (!root) {
        return root
    }

    // 1. dfs
    if (root.val > key) {
        root.left = deleteNode(root.left, key)
        return root
    }

    if (root.val < key) {
        root.right = deleteNode(root.right, key)
        return root
    }

    // if (root.val === key) @below
    if (!root.left && !root.right) {
        return null
    }

    if (!root.left) {
        return root.right
    }

    if (!root.right) {
        return root.left
    }

    let successor = root.right

    while (successor.left) {
        successor = successor.left // find the minimum node in the right subtree
    }

    root.right = deleteNode(root.right, successor.val) // replace the root and delete it
    successor.left = root.left
    successor.right = root.right

    return successor
}

export { deleteNode }
