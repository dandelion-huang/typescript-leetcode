import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): number {
    const queue: [TreeNode, number][] = [[node, node.val]]
    let sum = 0

    while (queue.length) {
        const [curNode, num] = queue.shift()!

        if (!curNode.left && !curNode.right) {
            sum += num
        }

        if (curNode.left) {
            queue.push([curNode.left, num * 10 + curNode.left.val])
        }

        if (curNode.right) {
            queue.push([curNode.right, num * 10 + curNode.right.val])
        }
    }

    return sum
}

function sumNumbers(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    return bfs(root)
}

export { sumNumbers }
