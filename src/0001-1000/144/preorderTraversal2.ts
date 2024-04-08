import { TreeNode } from 'utils/BinaryTreeNode'

// <Stack>
// Time: O(n)
// Space: O(n)

function preorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []
    // stack
    const stack: TreeNode[] = []

    // 1. iteration
    while (root || stack.length) {
        while (root) {
            // 2. preorder traversal
            ans.push(root.val)
            stack.push(root)
            root = root.left
        }

        root = stack.pop()!
        root = root.right
    }

    return ans
}

export { preorderTraversal }
