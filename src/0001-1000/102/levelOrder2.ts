import { TreeNode } from 'utils/BinaryTreeNode'

// <Queue>
// Time: O(n)
// Space: O(n)

function levelOrder(root: TreeNode | null): number[][] {
    const ans: number[][] = []

    // 1. bfs
    function bfs(node: TreeNode | null): void {
        // edge cases
        if (node === null) {
            return
        }

        // 2. level-order traversal
        let queue: TreeNode[] = [node]

        while (queue.length) {
            ans.push(queue.map((curLevelNode) => curLevelNode.val))
            queue = queue
                .map(
                    (curLevelNode) =>
                        [curLevelNode.left, curLevelNode.right].filter(Boolean) as TreeNode[]
                )
                .flat()
        }
    }

    bfs(root)

    return ans
}

export { levelOrder }
