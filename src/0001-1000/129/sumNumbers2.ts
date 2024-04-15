import { TreeNode } from 'utils/BinaryTreeNode'

// <BFS, Queue>
// Time: O(n)
// Space: O(n)

function sumNumbers(root: TreeNode | null): number {
    // edge cases
    if (root === null) {
        return 0
    }

    const nodeQueue: TreeNode[] = [root]
    const numQueue: number[] = [root.val]
    let sum = 0

    // bfs
    while (nodeQueue.length) {
        const node = nodeQueue.shift()!
        const num = numQueue.shift()!
        const left = node.left
        const right = node.right

        if (left === null && right === null) {
            sum += num
        }

        if (left !== null) {
            nodeQueue.push(left)
            numQueue.push(num * 10 + left.val)
        }

        if (right !== null) {
            nodeQueue.push(right)
            numQueue.push(num * 10 + right.val)
        }
    }

    return sum
}

export { sumNumbers }
