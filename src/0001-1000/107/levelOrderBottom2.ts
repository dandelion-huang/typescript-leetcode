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
        let queue: (TreeNode | null)[] = [node]

        while (queue.length) {
            ans.unshift(queue.map((curLevelNode) => curLevelNode!.val))
            queue = queue
                .map((curLevelNode) => [curLevelNode!.left, curLevelNode!.right].filter(Boolean))
                .flat()
        }
    }

    bfs(root)

    return ans
}

export { levelOrderBottom }
