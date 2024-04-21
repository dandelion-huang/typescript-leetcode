import { TreeNode } from 'utils/BinaryTreeNode'

// <BFS, Queue>
// Time: O(min(n, m))
// Space: O(min(n, m))

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // edge cases
    if (!p && !q) {
        return true
    }

    if (!p || !q) {
        return false
    }

    const queueP: TreeNode[] = [p]
    const queueQ: TreeNode[] = [q]

    // 1. bfs
    while (queueP.length && queueQ.length) {
        const pNode = queueP.shift()!
        const qNode = queueQ.shift()!

        // compare the val of the nodes
        if (pNode.val !== qNode.val) {
            return false
        }

        if ((pNode.left && !qNode.left) || (!pNode.left && qNode.left)) {
            return false
        }

        if ((pNode.right && !qNode.right) || (!pNode.right && qNode.right)) {
            return false
        }

        if (pNode.left) {
            queueP.push(pNode.left)
        }

        if (pNode.right) {
            queueP.push(pNode.right)
        }

        if (qNode.left) {
            queueQ.push(qNode.left)
        }

        if (qNode.right) {
            queueQ.push(qNode.right)
        }
    }

    return queueP.length === 0 && queueQ.length === 0
}

export { isSameTree }
