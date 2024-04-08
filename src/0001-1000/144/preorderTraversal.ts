import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function preorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

    // 1. dfs
    function dfs(node: TreeNode | null): void {
        if (node === null) {
            return
        }

        // 2. preorder traversal
        ans.push(node.val)
        dfs(node.left)
        dfs(node.right)
    }

    dfs(root)

    return ans
}

export { preorderTraversal }
