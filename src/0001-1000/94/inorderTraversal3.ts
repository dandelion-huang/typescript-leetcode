import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, Morris Traversal>
// Time: O(n)
// Space: O(1)

// Morris Traversal (Inorder)
// 1. if !node.left
//    push node in the ans array
//    and then traverse node.right
// 2. if node.left
//    find the rightmost node (marked as predecessor) on the left subtree
// 2.a. if !predecessor.right
//      predecessor.right = node
//      and then traverse node.left
// 2.b. if predecessor.right (now predecessor.right = node by 2.a)
//      push node in the ans array, predecessor.right = null
//      and then traverse node.right

function iterate(node: TreeNode | null): number[] {
    const ans: number[] = []
    let predecessor: TreeNode | null = null

    while (node) {
        if (node.left) {
            // 2.
            predecessor = node.left

            while (predecessor.right && predecessor.right !== node) {
                predecessor = predecessor.right
            }

            if (!predecessor.right) {
                // 2.a
                predecessor.right = node
                node = node.left
            } else {
                // 2.b
                ans.push(node.val)
                predecessor.right = null
                node = node.right
            }
        } else {
            // 1.
            ans.push(node.val)
            node = node.right
        }
    }

    return ans
}

function inorderTraversal(root: TreeNode | null): number[] {
    // edge cases
    if (!root) {
        return []
    }

    return iterate(root)
}

export { inorderTraversal }
