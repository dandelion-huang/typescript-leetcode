import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Stack>
// Time: O(n)
// Space: O(n)

function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []
    const stack: TreeNode[] = []

    // 1. iteration
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()!
        // 2. inorder traversal
        ans.push(root.val)
        root = root.right
    }

    return ans
}

export { inorderTraversal }
