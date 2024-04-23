import { TreeNode } from 'utils/BinaryTreeNode'

// <Iteration, BFS>
// Time: O(n)
// Space: O(n)

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // edge cases
    if (!root) {
        return false
    }

    const queue: [TreeNode, number][] = [[root, root.val]]

    // 1. bfs
    while (queue.length) {
        const [node, sum] = queue.shift()!

        if (!node.left && !node.right) {
            if (sum === targetSum) {
                return true
            }
            continue
        }

        if (node.left) {
            queue.push([node.left, sum + node.left.val])
        }

        if (node.right) {
            queue.push([node.right, sum + node.right.val])
        }
    }

    return false
}

export { hasPathSum }
