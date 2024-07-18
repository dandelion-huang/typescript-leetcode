import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null, ans: number[]) {
    if (!node) {
        return
    }

    // 2. postorder traversal
    dfs(node.left, ans)
    dfs(node.right, ans)
    ans.push(node.val)
}

function postorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

    dfs(root, ans)

    return ans
}

export { postorderTraversal }
