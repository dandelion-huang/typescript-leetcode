import { TreeNode } from 'classes/BinaryTreeNode'

// <Iteration, BFS>
// Time: O(n)
// Space: O(1)

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    // edge cases
    if (!root) {
        return new TreeNode(val)
    }

    let cur = root

    while (cur) {
        // constraints: cur.val !== val
        if (val < cur.val) {
            if (cur.left) {
                cur = cur.left
            } else {
                cur.left = new TreeNode(val)
                break
            }
        }

        if (val > cur.val) {
            if (cur.right) {
                cur = cur.right
            } else {
                cur.right = new TreeNode(val)
                break
            }
        }
    }

    return root
}

export { insertIntoBST }
