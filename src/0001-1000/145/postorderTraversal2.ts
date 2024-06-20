import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, DFS, Stack>
// Time: O(n)
// Space: O(n)

// 1. dfs
function iterate(node: TreeNode | null): number[] {
    const ans: number[] = []
    const stack: TreeNode[] = []
    let prev: TreeNode | null = null // prev for examine the right subtree

    while (node || stack.length) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack[stack.length - 1]

        // 2. postorder traversal
        if (!node.right || node.right === prev) {
            // if the right subtree is null
            // or the right subtree is the same as the previous node
            stack.pop()
            ans.push(node.val)
            prev = node
            node = null
        } else {
            node = node.right
        }
    }

    return ans
}

function postorderTraversal(root: TreeNode | null): number[] {
    // edge cases
    if (!root) {
        return []
    }

    return iterate(root)
}

export { postorderTraversal }
