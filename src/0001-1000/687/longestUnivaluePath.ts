import { TreeNode } from 'utils/BinaryTreeNode'

// Time: O(n)
// Space: O(logn), logn is the height of the tree

function longestUnivaluePath(root: TreeNode | null): number {
    let ans = 0

    function dfs(node: TreeNode | null, prevVal?: number): number {
        if (node === null) {
            return 0
        }

        const leftLength = dfs(node.left, node.val)
        const rightLength = dfs(node.right, node.val)

        ans = Math.max(ans, leftLength + rightLength)

        if (node.val !== prevVal) {
            return 0
        }

        return 1 + Math.max(leftLength, rightLength)
    }

    dfs(root)

    return ans
}

export { longestUnivaluePath }
