import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Queue>
// Time: O(n^2)
// Space: O(n^2)

// 1. bfs
function bfs(node: TreeNode): string[] {
    const ans: string[] = []
    const queue: [TreeNode, string][] = [[node, node.val.toString()]]

    // 1. bfs
    while (queue.length) {
        const [curNode, path] = queue.shift()!

        if (!curNode.left && !curNode.right) {
            ans.push(path)
            continue
        }

        if (curNode.left) {
            queue.push([curNode.left, `${path}->${curNode.left.val.toString()}`])
        }

        if (curNode.right) {
            queue.push([curNode.right, `${path}->${curNode.right.val.toString()}`])
        }
    }

    return ans
}

function binaryTreePaths(root: TreeNode | null): string[] {
    // edge cases
    if (!root) {
        return []
    }

    return bfs(root)
}

export { binaryTreePaths }
