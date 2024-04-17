import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

    // 1. dfs
    function dfs(node: TreeNode | null): void {
        if (!node) {
            return
        }

        // 2. inorder traversal
        dfs(node.left)
        ans.push(node.val)
        dfs(node.right)
    }

    dfs(root)

    return ans
}

export { inorderTraversal }
