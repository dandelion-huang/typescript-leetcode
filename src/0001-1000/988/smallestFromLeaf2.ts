import { TreeNode } from 'utils/BinaryTreeNode'

// <BFS, Queue>
// Time: O(n)
// Space: O(n)

function numToChar(num: number): string {
    if (num < 0 || num > 25) {
        throw new Error('invalid number')
    }

    return String.fromCharCode(97 + num) // Unicode of 'a': 97
}

function smallestFromLeaf(root: TreeNode | null): string {
    let smallestStr = ''

    // edge cases
    if (!root) {
        return smallestStr
    }

    const queue: [TreeNode, string][] = [[root, '']]

    // 1. bfs
    while (queue.length) {
        const [node, curStr] = queue.shift()!
        const newCurStr = numToChar(node.val) + curStr

        if (!node.left && !node.right) {
            if (smallestStr === '' || smallestStr > newCurStr) {
                smallestStr = newCurStr
            }
        }

        if (node.left) {
            queue.push([node.left, newCurStr])
        }

        if (node.right) {
            queue.push([node.right, newCurStr])
        }
    }

    return smallestStr
}

export { smallestFromLeaf }
