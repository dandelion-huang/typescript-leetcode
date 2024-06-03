import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function removeLeafNodes(root: TreeNode | null, target: number): TreeNode | null {
    // edge cases
    if (!root) {
        return root
    }

    root.left = removeLeafNodes(root.left, target)
    root.right = removeLeafNodes(root.right, target)

    // 2. post-order traversal
    if (!root.left && !root.right && root.val === target) {
        return null
    }

    return root
}

export { removeLeafNodes }
