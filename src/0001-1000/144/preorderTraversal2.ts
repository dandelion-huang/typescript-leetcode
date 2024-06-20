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
            // 2. preorder traversal
            ans.push(node.val)
            stack.push(node)
            node = node.left
        }

        node = stack.pop()!
        node = node.right
    }

    return ans
}

function preorderTraversal(root: TreeNode | null): number[] {
    // edge cases
    if (!root) {
        return []
    }

    return iterate(root)
}

export { preorderTraversal }
