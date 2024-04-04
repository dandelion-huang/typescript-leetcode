import { Node } from 'utils/N-aryTreeNode'

// Time: O(n)
// Space: O(n)

function levelOrder(root: Node | null): number[][] {
    const ans: number[][] = []

    // 1. bfs
    function bfs(node: Node | null): void {
        // edge cases
        if (node === null) {
            return
        }

        // 2. level-order traversal
        let queue: Node[] = [node]

        while (queue.length > 0) {
            ans.push(queue.map((curLevelNode) => curLevelNode.val))
            queue = queue.map((curLevelNode) => curLevelNode.children).flat()
        }
    }

    bfs(root)

    return ans
}

export { levelOrder }
