import { isSameTree } from '0001-1000/100/isSameTree'
import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(nm)
// Space: O(max(n, m))

function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
    // edge cases
    if (!root || !subRoot) {
        return false
    }

    // 1. dfs
    return (
        isSameTree(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot)
    )
}

export { isSubtree }
