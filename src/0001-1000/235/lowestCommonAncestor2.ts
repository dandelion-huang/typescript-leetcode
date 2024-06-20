import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function getPath(node: TreeNode, target: TreeNode): TreeNode[] {
    const path: TreeNode[] = []

    while (node !== target) {
        path.push(node)

        if (target.val < node.val) {
            node = node.left!
        } else {
            node = node.right!
        }
    }

    path.push(target)

    return path
}

function lowestCommonAncestor(
    root: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): TreeNode | null {
    // edge cases
    if (!root) {
        return root
    }

    const pathP = getPath(root, p!)
    const pathQ = getPath(root, q!)

    // find the lowest common ancestor
    const minLength = Math.min(pathP.length, pathQ.length)
    let ancestor: TreeNode | null = null

    for (let i = 0; i < minLength; ++i) {
        if (pathP[i] === pathQ[i]) {
            ancestor = pathP[i]
        }
    }

    return ancestor
}

export { lowestCommonAncestor }
