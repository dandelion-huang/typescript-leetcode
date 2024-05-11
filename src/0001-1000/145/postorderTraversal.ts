import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function postorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

    // 1. dfs
    function dfs(node: TreeNode | null): void {
        if (!node) {
            return
        }

        // 2. postorder traversal
        dfs(node.left)
        dfs(node.right)
        ans.push(node.val)
    }

    dfs(root)

    return ans
}

export { postorderTraversal }
