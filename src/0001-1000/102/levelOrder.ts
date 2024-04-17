import { TreeNode } from 'utils/BinaryTreeNode'

// <Queue>
// Time: O(n)
// Space: O(n)

function levelOrder(root: TreeNode | null): number[][] {
    const ans: number[][] = []

    // 1. bfs
    function bfs(node: TreeNode | null): void {
        // edge cases
        if (!node) {
            return
        }

        // 2. level-order traversal
        let queue: TreeNode[] = [node]
        let newQueue: TreeNode[]

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
    }

    bfs(root)

    return ans
}

export { levelOrder }
