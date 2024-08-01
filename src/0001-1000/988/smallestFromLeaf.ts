import { TreeNode } from 'classes/BinaryTreeNode'
import { numToLowercaseChar } from 'utils/char/numToLowercaseChar'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    smallestStr: string
}

// 1. dfs
function dfs(node: TreeNode | null, helper: Helper, curStr = '') {
    // edge cases
    if (!node) {
        return
    }

    // 2. pre-order traversal
    curStr = numToLowercaseChar(node.val) + curStr

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
