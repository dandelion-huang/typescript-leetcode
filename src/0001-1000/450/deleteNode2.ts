import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS>
// Time: O(n)
// Space: O(1)

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

    if (!cur.left && !cur.right) {
        cur = null
    } else if (!cur.left) {
        cur = cur.right
    } else if (!cur.right) {
        cur = cur.left
    } else {
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
        cur = successor // replace the root and delete it
    }

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
