import { Node } from 'classes/N-aryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: Node | null, ans: number[]) {
    if (!node) {
        return
    }

    // 2. postorder traversal
    for (const child of node.children) {
        dfs(child, ans)
    }

    ans.push(node.val)
}

function postorder(root: Node | null): number[] {
    const ans: number[] = []

    dfs(root, ans)

    return ans
}

export { postorder }
