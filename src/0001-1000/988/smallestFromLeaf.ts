import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    smallestStr: string
}

function numToChar(num: number): string {
    if (num < 0 || num > 25) {
        throw new Error('invalid number')
    }

    return String.fromCharCode(97 + num) // Unicode of 'a': 97
}

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper, curStr = '') {
    // edge cases
    if (!node) {
        return
    }

    // 2. pre-order traversal
    curStr = numToChar(node.val) + curStr

    if (!node.left && !node.right) {
        if (helper.smallestStr === '' || helper.smallestStr > curStr) {
            helper.smallestStr = curStr
        }

        return
    }

    if (node.left) {
        dfs(node.left, helper, curStr)
    }

    if (node.right) {
        dfs(node.right, helper, curStr)
    }
}

function smallestFromLeaf(root: TreeNode | null): string {
    const helper: Helper = { smallestStr: '' }

    dfs(root, helper)

    return helper.smallestStr
}

export { smallestFromLeaf }
