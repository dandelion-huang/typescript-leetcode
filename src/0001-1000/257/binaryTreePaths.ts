import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n^2)
// Space: O(n^2)

// 1. dfs
function dfs(node: TreeNode | null, ans: string[], path = '') {
    if (!node) {
        return
    }

    // 2. pre-order traversal
    path += node.val.toString()

    if (!node.left && !node.right) {
        ans.push(path)
        return
    }

    path += '->'
    dfs(node.left, ans, path)
    dfs(node.right, ans, path)
}

function binaryTreePaths(root: TreeNode | null): string[] {
    const ans: string[] = []

    dfs(root, ans)

    return ans
}

export { binaryTreePaths }
