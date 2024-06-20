import { Node } from 'classes/N-aryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: Node): number[][] {
    const ans: number[][] = []
    const queue: Node[] = [node]
    let curLevelSize: number

    // 2. level-order traversal
    while (queue.length) {
        curLevelSize = queue.length
        ans.push([])

        for (let i = 0; i < curLevelSize; ++i) {
            const curNode = queue.shift()!
            ans[ans.length - 1].push(curNode.val)

            if (curNode.children) {
                queue.push(...curNode.children)
            }
        }
    }

    return ans
}

function levelOrder(root: Node | null): number[][] {
    // edge cases
    if (!root) {
        return []
    }

    return bfs(root)
}

export { levelOrder }
