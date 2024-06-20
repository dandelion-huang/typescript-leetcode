import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    if (!root) {
        return root
    }

    if (root.val === val) {
        return root
    }

    // 1. dfs
    return searchBST(val < root.val ? root.left : root.right, val)
}

export { searchBST }
