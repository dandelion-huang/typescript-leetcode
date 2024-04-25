import { TreeNode } from 'utils/BinaryTreeNode'

// <BFS, Queue>
// Time: O(n^2)
// Space: O(n^2)

function binaryTreePaths(root: TreeNode | null): string[] {
    // edge cases
    if (!root) {
        return []
    }

    const ans: string[] = []
    const queue: [TreeNode, string][] = [[root, root.val.toString()]]

    // 1. bfs
    while (queue.length) {
        const [node, path] = queue.shift()!

        if (!node.left && !node.right) {
            ans.push(path)
            continue
        }

        if (node.left) {
            queue.push([node.left, `${path}->${node.left.val.toString()}`])
        }

        if (node.right) {
            queue.push([node.right, `${path}->${node.right.val.toString()}`])
        }
    }

    return ans
}

export { binaryTreePaths }
