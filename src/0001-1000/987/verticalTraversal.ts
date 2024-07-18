import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(nlogn) (Sorting)
// Space: O(n)

// node: [col, row, val]
type NodeTuple = [number, number, number]

// 1. dfs
function dfs(node: TreeNode | null, col: number, row: number, nodes: NodeTuple[]) {
    // edge cases
    if (!node) {
        return
    }

    // 2. pre-order traversal
    nodes.push([col, row, node.val])
    dfs(node.left, col - 1, row + 1, nodes)
    dfs(node.right, col + 1, row + 1, nodes)
}

function verticalTraversal(root: TreeNode | null): number[][] {
    const nodes: NodeTuple[] = []

    dfs(root, 0, 0, nodes)

    // 3. sorting with the col, row, and val
    nodes.sort(([colA, rowA, valA], [colB, rowB, valB]) => {
        if (colA !== colB) {
            return colA - colB
        }

        if (rowA !== rowB) {
            return rowA - rowB
        }

        return valA - valB
    })

    // 4. traverse the nodes
    const ans: number[][] = []
    let lastCol = -Infinity

    for (const [col, , val] of nodes) {
        if (col !== lastCol) {
            ans.push([])
            lastCol = col
        }

        ans[ans.length - 1].push(val)
    }

    return ans
}

export { verticalTraversal }
