import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, DFS, Stack>
// Time: O(n + k)
// Space: O(n)

function iterate(node: TreeNode | null, k: number): number {
    const stack: TreeNode[] = []

    while (stack.length || node) {
        while (node) {
            stack.push(node)
            node = node.left
        }

        // 2. inorder traversal
        node = stack.pop()!
        --k

        if (k === 0) {
            break
        }

        node = node.right
    }

    return node!.val
}

function kthSmallest(root: TreeNode | null, k: number): number {
    // edge cases
    if (!root) {
        return -1
    }

    return iterate(root, k)
}

export { kthSmallest }
