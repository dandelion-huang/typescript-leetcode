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

        root = stack.pop()!

        // 2. postorder traversal
        if (root.right === null || root.right === prev) {
            ans.push(root.val)
            prev = root
            root = null
        } else {
            // if the right subtree is not null
            // push the root back to the stack and then traverse the right subtree
            stack.push(root)
            root = root.right
        }
    }

    return ans
}

export { postorderTraversal }
