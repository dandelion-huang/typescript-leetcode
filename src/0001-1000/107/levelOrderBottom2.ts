import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): number[][] {
    const ans: number[][] = []
    let queue: (TreeNode | null)[] = [node]

    // 2. level-order traversal
    while (queue.length) {
        ans.unshift(queue.map((curLevelNode) => curLevelNode!.val))
        queue = queue
            .map((curLevelNode) => [curLevelNode!.left, curLevelNode!.right].filter(Boolean))
            .flat()
    }

    return ans
}

function levelOrderBottom(root: TreeNode | null): number[][] {
    // edge cases
    if (!root) {
        return []
    }

    return bfs(root)
}

export { levelOrderBottom }
