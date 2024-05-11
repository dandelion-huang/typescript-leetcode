import { TreeNode } from 'classes/BinaryTreeNode'

// <Morris Traversal>
// Time: O(n)
// Space: O(1)

function inorderTraversal(root: TreeNode | null): number[] {
    const ans: number[] = []

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

    let predecessor: TreeNode | null = null

    // iteration
    while (root) {
        if (root.left) {
            // 2.
            predecessor = root.left

            while (predecessor.right && predecessor.right !== root) {
                predecessor = predecessor.right
            }

            if (!predecessor.right) {
                // 2.a
                predecessor.right = root
                root = root.left
            } else {
                // 2.b
                ans.push(root.val)
                predecessor.right = null
                root = root.right
            }
        } else {
            // 1.
            ans.push(root.val)
            root = root.right
        }
    }

    return ans
}

export { inorderTraversal }
