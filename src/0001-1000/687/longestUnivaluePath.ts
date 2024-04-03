import { TreeNode } from 'utils/BinaryTreeNode'

// Notice that the path is the relationship between two nodes

// Time: O(n)
// Space: O(logn), logn is the height of the tree

function longestUnivaluePath(root: TreeNode | null): number {
    let ans = 0

    // 1. dfs
    function dfs(node: TreeNode | null, prevVal?: number): number {
        if (node === null) {
            return 0
        }

        const leftLength = dfs(node.left, node.val)
        const rightLength = dfs(node.right, node.val)

        // 2. update the answer
        ans = Math.max(ans, leftLength + rightLength)

        // 3. if the current node is not the same as the previous node, length is 0
        if (node.val !== prevVal) {
            return 0
        }

        // 4. return the length of the path
        return 1 + Math.max(leftLength, rightLength)
    }

    dfs(root)

    return ans
}

export { longestUnivaluePath }
