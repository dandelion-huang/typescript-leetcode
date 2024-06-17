import { TreeNode } from 'classes/BinaryTreeNode'

function updateHelper(
    root: TreeNode | null,
    prev: TreeNode | null,
    p: TreeNode | null,
    q: TreeNode | null,
): [TreeNode | null, TreeNode | null, TreeNode | null] {
    if (prev && root!.val < prev.val) {
        q = root

        if (!p) {
            p = prev
        }
    }

    prev = root

    return [prev, p, q]
}

export { updateHelper }
