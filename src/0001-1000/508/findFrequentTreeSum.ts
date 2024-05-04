import { TreeNode } from 'utils/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(
    node: TreeNode | null,
    countMap: Map<number, number>,
    maxCount: { value: number }
): number {
    // edge cases
    if (!node) {
        return 0
    }

    // 2. pre-order traversal
    const sum = node.val + dfs(node.left, countMap, maxCount) + dfs(node.right, countMap, maxCount)

    countMap.set(sum, (countMap.get(sum) ?? 0) + 1)
    maxCount.value = Math.max(maxCount.value, countMap.get(sum)!)

    return sum
}

function findFrequentTreeSum(root: TreeNode | null): number[] {
    const countMap = new Map<number, number>() // Map<sum, count>
    const maxCount = { value: 0 }

    dfs(root, countMap, maxCount)

    const ans: number[] = []

    for (const [sum, count] of countMap) {
        if (count === maxCount.value) {
            ans.push(sum)
        }
    }

    return ans
}

export { findFrequentTreeSum }
