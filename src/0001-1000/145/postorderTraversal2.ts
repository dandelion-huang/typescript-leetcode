import { TreeNode } from 'utils/BinaryTreeNode'

// <Stack>
// Time: O(n)
// Space: O(n)

function postorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []
    // stack
    const stack: TreeNode[] = []
    // prev for examine the right subtree
    let prev: TreeNode | null = null

    // 1. iteration
    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack[stack.length - 1]

        // 2. postorder traversal
        if (!root.right || root.right === prev) {
            // if the right subtree is null
            // or the right subtree is the same as the previous node
            stack.pop()
            ans.push(root.val)
            prev = root
            root = null
        } else {
            root = root.right
        }
    }

    return ans
}

export { postorderTraversal }
