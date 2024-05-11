import { TreeNode } from 'classes/BinaryTreeNode'

// Consider three conditions:
// a. the number of necessary cameras when there is a camera on the root
// b. the minimum of necessary cameras
// c. the number of necessary cameras to cover the left subtree and the right subtree
//    we don't need to cover the root here

// a >= b >= c
// a = lc + rc + 1
// b = min(a, min(la + rb), min(lb + ra))

// <Recursion, DFS, Dynamic Programming>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: TreeNode | null): [number, number, number] {
    if (!node) {
        return [Infinity, 0, 0]
    }

    const [la, lb, lc] = dfs(node.left)
    const [ra, rb, rc] = dfs(node.right)
    const a = lc + rc + 1
    const b = Math.min(a, Math.min(la + rb, lb + ra))
    const c = Math.min(a, lb + rb)

    return [a, b, c]
}

function minCameraCover(root: TreeNode | null): number {
    // b is the minimum of necessary cameras
    return dfs(root)[1]
}

export { minCameraCover }
