import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, arr: number[]) {
    if (!node) {
        return
    }

    // 2. inorder traversal
    dfs(node.left, arr)
    arr.push(node.val)
    dfs(node.right, arr)
}

function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

    dfs(root, ans)

    return ans
}

export { inorderTraversal }
