import { TreeNode } from 'classes/BinaryTreeNode'

// <BFS, Queue>
// Time: O(n)
// Space: O(n)

function levelOrderBottom(root: TreeNode | null): number[][] {
    const ans: number[][] = []

    // 1. bfs
    function bfs(node: TreeNode | null): void {
        // edge cases
        if (!node) {
            return
        }

        // 2. level-order traversal
        const queue: (TreeNode | null)[] = [node]
        let curLevelSize: number

        while (queue.length) {
            curLevelSize = queue.length
            ans.unshift([])

            for (let i = 0; i < curLevelSize; ++i) {
                const curNode = queue.shift()!
                ans[0].push(curNode.val)

                if (curNode.left) {
                    queue.push(curNode.left)
                }

                if (curNode.right) {
                    queue.push(curNode.right)
                }
            }
        }
    }

    bfs(root)

    return ans
}

export { levelOrderBottom }
