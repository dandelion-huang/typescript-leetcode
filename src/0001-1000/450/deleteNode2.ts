import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS>
// Time: O(n)
// Space: O(1)

function updateCurHelper(cur: TreeNode) {
    if (!cur.left && !cur.right) {
        return null
    }

    if (!cur.left) {
        return cur.right
    }

    if (!cur.right) {
        return cur.left
    }

    let successor = cur.right
    let sucParent = cur

    while (successor.left) {
        sucParent = successor
        successor = successor.left // find the minimum node in the right subtree
    }

    if (sucParent.val === cur.val) {
        sucParent.right = successor.right
    } else {
        sucParent.left = successor.right
    }

    successor.left = cur.left
    successor.right = cur.right

    return successor // replace the root and delete it
}

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
    let cur: TreeNode | null = root
    let curParent: TreeNode | null = null

    while (cur && cur.val !== key) {
        curParent = cur

        if (cur.val > key) {
            cur = cur.left
        } else {
            cur = cur.right
        }
    }

    if (!cur) {
        return root
    }

    cur = updateCurHelper(cur)

    if (!curParent) {
        return cur
    }

    if (curParent.left?.val === key) {
        curParent.left = cur
    } else {
        curParent.right = cur
    }

    return root
}

export { deleteNode }
