import { Node } from 'classes/N-aryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: Node): number[][] {
    const ans: number[][] = []
    let queue: Node[] = [node]

    // 2. level-order traversal
    while (queue.length) {
        ans.push(queue.map((curLevelNode) => curLevelNode.val))
        queue = queue.map((curLevelNode) => curLevelNode.children).flat()
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
