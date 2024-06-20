import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): number {
    const queue: TreeNode[] = [node]
    let ans = 0

    while (queue.length) {
        const size = queue.length

        for (let i = 0; i < size; ++i) {
            const curNode = queue.shift()!

            if (curNode.left) {
                queue.push(curNode.left)
            }

            if (curNode.right) {
                queue.push(curNode.right)
            }
        }

        ++ans
    }

    return ans
}

function maxDepth(root: TreeNode | null): number {
    // edge cases
    if (!root) {
        return 0
    }

    return bfs(root)
}

export { maxDepth }
