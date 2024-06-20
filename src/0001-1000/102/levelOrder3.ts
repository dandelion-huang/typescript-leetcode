import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): number[][] {
    const ans: number[][] = []
    const queue: TreeNode[] = [node]
    let curLevelSize: number

    // 2. level-order traversal
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
