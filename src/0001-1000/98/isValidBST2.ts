import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Stack>
// Time: O(n)
// Space: O(n)

function isValidBST(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return false
    }

    const stack: TreeNode[] = []
    let inorderVal = -Infinity

    // 1. bfs
    while (stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        // 2. inorder traversal
        root = stack.pop()!

        if (root.val <= inorderVal) {
            return false
        }

        inorderVal = root.val
        root = root.right
    }

    return true
}

export { isValidBST }
