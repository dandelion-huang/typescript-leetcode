import { TreeNode } from 'classes/BinaryTreeNode'
import { numToLowercaseChar } from 'utils/char/numToLowercaseChar'

// <Iteration, BFS, Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode): string {
    const queue: [TreeNode, string][] = [[node, '']]
    let smallestStr = ''

    while (queue.length) {
        const [curNode, curStr] = queue.shift()!
        const newCurStr = numToLowercaseChar(curNode.val) + curStr

        if (!curNode.left && !curNode.right) {
            if (smallestStr === '' || smallestStr > newCurStr) {
                smallestStr = newCurStr
            }
        }

        if (curNode.left) {
            queue.push([curNode.left, newCurStr])
        }

        if (curNode.right) {
            queue.push([curNode.right, newCurStr])
        }
    }

    return smallestStr
}

function smallestFromLeaf(root: TreeNode | null): string {
    // edge cases
    if (!root) {
        return ''
    }

    return bfs(root)
}

export { smallestFromLeaf }
