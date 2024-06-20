import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode, targetSum: number): boolean {
    const queue: [TreeNode, number][] = [[node, node.val]]

    // 1. bfs
    while (queue.length) {
        const [curNode, sum] = queue.shift()!

        if (!curNode.left && !curNode.right) {
            if (sum === targetSum) {
                return true
            }
            continue
        }

        if (curNode.left) {
            queue.push([curNode.left, sum + curNode.left.val])
        }

        if (curNode.right) {
            queue.push([curNode.right, sum + curNode.right.val])
        }
    }

    return false
}

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    // edge cases
    if (!root) {
        return false
    }

    return bfs(root, targetSum)
}

export { hasPathSum }
