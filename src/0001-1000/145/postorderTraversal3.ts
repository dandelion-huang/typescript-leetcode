import { TreeNode } from 'utils/BinaryTreeNode'

// <Morris Traversal>
// Time: O(n)
// Space: O(1)

function postorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

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

    let predecessor: TreeNode | null = null

    // iteration
    while (root) {
        if (root.right) {
            // 2.
            predecessor = root.right

            while (predecessor.left && predecessor.left !== root) {
                predecessor = predecessor.left
            }

            if (!predecessor.left) {
                // 2.a
                ans.unshift(root.val)
                predecessor.left = root
                root = root.right
            } else {
                // 2.b
                predecessor.left = null
                root = root.left
            }
        } else {
            // 1.
            ans.unshift(root.val)
            root = root.left
        }
    }

    return ans
}

export { postorderTraversal }
