import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Stack>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode | null): boolean {
    const stack: TreeNode[] = []
    let inorderVal = -Infinity

    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        // 2. inorder traversal
        node = stack.pop()!

        if (node.val <= inorderVal) {
            return false
        }

        inorderVal = node.val
        node = node.right
    }

    return true
}

function isValidBST(root: TreeNode | null): boolean {
    // edge cases
    if (!root) {
        return false
    }

    return bfs(root)
}

export { isValidBST }
