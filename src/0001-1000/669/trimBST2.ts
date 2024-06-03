import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, DFS>
// Time: O(n)
// Space: O(1)

function trimBST(root: TreeNode | null, low: number, high: number): TreeNode | null {
    // handle the root
    while (root && (root.val < low || root.val > high)) {
        if (root.val < low) {
            root = root.right
        } else {
            root = root.left
        }
    }

    // edge cases
    if (!root) {
        return root
    }

    let node: TreeNode = root

    // 1. dfs
    while (node.left) {
        if (node.left.val < low) {
            node.left = node.left.right
        } else {
            node = node.left
        }
    }

    node = root

    while (node.right) {
        if (node.right.val > high) {
            node.right = node.right.left
        } else {
            node = node.right
        }
    }

    return root
}

export { trimBST }
