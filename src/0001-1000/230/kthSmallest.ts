import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS, Stack>
// Time: O(n + k)
// Space: O(n)

function kthSmallest(root: TreeNode | null, k: number): number {
    // edge cases
    if (!root) {
        return -1
    }

    const stack: TreeNode[] = []

    while (stack.length || root) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        // 2. inorder traversal
        root = stack.pop()!
        --k

        if (k === 0) {
            break
        }

        root = root.right
    }

    return root!.val
}

export { kthSmallest }
