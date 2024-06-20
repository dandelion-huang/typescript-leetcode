import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, Morris Traversal>
// Time: O(n)
// Space: O(1)

// Morris Traversal (Postorder)
// (just the inverse of the preorder Morris Traversal)
// 1. if !node.right
//    unshift node in the ans array
//    and then traverse node.left
// 2. if node.right
//    find the leftmost node (marked as predecessor) on the right subtree
// 2.a. if !predecessor.left
//      unshift node in the ans array, predecessor.left = node
//      and then traverse node.right
// 2.b. if predecessor.left (now predecessor.left = node by 2.a)
//      predecessor.left = null
//      and then traverse node.left

function iterate(node: TreeNode | null): number[] {
    const ans: number[] = []
    let predecessor: TreeNode | null = null

    while (node) {
        if (node.right) {
            // 2.
            predecessor = node.right

            while (predecessor.left && predecessor.left !== node) {
                predecessor = predecessor.left
            }

            if (!predecessor.left) {
                // 2.a
                ans.unshift(node.val)
                predecessor.left = node
                node = node.right
            } else {
                // 2.b
                predecessor.left = null
                node = node.left
            }
        } else {
            // 1.
            ans.unshift(node.val)
            node = node.left
        }
    }

    return ans
}

function postorderTraversal(root: TreeNode | null): number[] {
    // edge cases
    if (!root) {
        return []
    }

    return iterate(root)
}

export { postorderTraversal }
