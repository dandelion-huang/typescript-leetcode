import { TreeNode } from 'utils/BinaryTreeNode'

// <Stack>
// Time: O(n)
// Space: O(n)

function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []
    // 1. stack
    const stack: TreeNode[] = []

    // 2. iteration
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()!
        ans.push(root.val)
        root = root.right
    }

    return ans
}

export { inorderTraversal }
