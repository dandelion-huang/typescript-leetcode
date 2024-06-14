import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, ans: number[]): void {
    if (!node) {
        return
    }

    // 2. preorder traversal
    ans.push(node.val)
    dfs(node.left, ans)
    dfs(node.right, ans)
}

function preorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

    dfs(root, ans)

    return ans
}

export { preorderTraversal }
