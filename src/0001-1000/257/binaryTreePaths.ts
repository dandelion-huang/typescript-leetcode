import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n^2)
// Space: O(n^2)

function binaryTreePaths(root: TreeNode | null): string[] {
    const ans: string[] = []

    // 1. dfs
    function dfs(node: TreeNode | null, path: string = ''): void {
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
        dfs(node.left, path)
        dfs(node.right, path)
    }

    dfs(root)

    return ans
}

export { binaryTreePaths }
