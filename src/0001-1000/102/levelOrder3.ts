import { TreeNode } from 'classes/BinaryTreeNode'

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
        const queue: TreeNode[] = [node]
        let curLevelSize: number

        while (queue.length) {
            curLevelSize = queue.length
            ans.push([])

            for (let i = 0; i < curLevelSize; ++i) {
                const curNode = queue.shift()!
                ans[ans.length - 1].push(curNode.val)

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

export { levelOrder }
