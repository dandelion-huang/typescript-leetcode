import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

interface Helper {
    maxCount: number
}

// 1. dfs
function dfs(node: TreeNode | null, countMap: Map<number, number>, helper: Helper): number {
    // edge cases
    if (!node) {
        return 0
    }

    // 2. pre-order traversal
    const sum = node.val + dfs(node.left, countMap, helper) + dfs(node.right, countMap, helper)

    countMap.set(sum, (countMap.get(sum) ?? 0) + 1)
    helper.maxCount = Math.max(helper.maxCount, countMap.get(sum)!)

    return sum
}

function findFrequentTreeSum(root: TreeNode | null): number[] {
    const countMap = new Map<number, number>() // Map<sum, count>
    const helper = { maxCount: 0 }

    dfs(root, countMap, helper)

    const ans: number[] = []

    for (const [sum, count] of countMap) {
        if (count === helper.maxCount) {
            ans.push(sum)
        }
    }

    return ans
}

export { findFrequentTreeSum }
