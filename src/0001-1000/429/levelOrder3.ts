import { Node } from 'utils/N-aryTreeNode'

// <Queue>
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
        const queue: Node[] = [node]
        let curLevelSize: number

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
    }

    bfs(root)

    return ans
}

export { levelOrder }
