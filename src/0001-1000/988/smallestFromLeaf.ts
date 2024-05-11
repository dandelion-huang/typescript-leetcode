import { TreeNode } from 'classes/BinaryTreeNode'

// <DFS>
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

    // 1. dfs
    function dfs(node: TreeNode | null, curStr: string = ''): void {
        // edge cases
        if (!node) {
            return
        }

        // 2. pre-order traversal
        curStr = numToChar(node.val) + curStr

        if (!node.left && !node.right) {
            if (smallestStr === '' || smallestStr > curStr) {
                smallestStr = curStr
            }

            return
        }

        if (node.left) {
            dfs(node.left, curStr)
        }

        if (node.right) {
            dfs(node.right, curStr)
        }
    }

    dfs(root)

    return smallestStr
}

export { smallestFromLeaf }
