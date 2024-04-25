import { TreeNode } from 'utils/BinaryTreeNode'

// <BFS, Queue>
// Time: O(n)
// Space: O(n)

function sumNumbers(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    const queue: [TreeNode, number][] = [[root, root.val]]
    let sum = 0

    // bfs
    while (queue.length) {
        const [node, num] = queue.shift()!

        if (!node.left && !node.right) {
            sum += num
        }

        if (node.left) {
            queue.push([node.left, num * 10 + node.left.val])
        }

        if (node.right) {
            queue.push([node.right, num * 10 + node.right.val])
        }
    }

    return sum
}

export { sumNumbers }
