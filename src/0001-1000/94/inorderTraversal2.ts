import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, DFS, Stack>
// Time: O(n)
// Space: O(n)

// 1. dfs
function iterate(node: TreeNode | null): number[] {
    const ans: number[] = []
    const stack: TreeNode[] = []

    while (node || stack.length) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        node = stack.pop()!
        // 2. inorder traversal
        ans.push(node.val)
        node = node.right
    }

    return ans
}

function inorderTraversal(root: TreeNode | null): number[] {
    return iterate(root)
}

export { inorderTraversal }
