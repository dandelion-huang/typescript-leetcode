import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS>
// Time: O(n)
// Space: O(1)

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    while (root) {
        if (root.val === val) {
            return root
        }

        root = val < root.val ? root.left : root.right
    }

    return null
}

export { searchBST }
