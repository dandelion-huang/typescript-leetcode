import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): number[][] {
    const ans: number[][] = []
    let queue: TreeNode[] = [node]
    let newQueue: TreeNode[]

    // 2. level-order traversal
    while (queue.length) {
        ans.push(queue.map((curLevelNode) => curLevelNode.val))
        newQueue = []

        for (const curLevelNode of queue) {
            if (curLevelNode.left) {
                newQueue.push(curLevelNode.left)
            }

            if (curLevelNode.right) {
                newQueue.push(curLevelNode.right)
            }
        }

        queue = newQueue
    }

    return ans
}

function levelOrder(root: TreeNode | null): number[][] {
    // edge cases
    if (!root) {
        return []
    }

    return bfs(root)
}

export { levelOrder }
