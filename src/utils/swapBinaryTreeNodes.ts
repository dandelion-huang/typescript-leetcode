import { TreeNode } from 'classes/BinaryTreeNode'

function swap(i: TreeNode, j: TreeNode): void {
    const temp = i.val
    i.val = j.val
    j.val = temp
}

export { swap }
