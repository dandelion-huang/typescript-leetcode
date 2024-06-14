import { Node } from 'classes/N-aryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

// 1. dfs
function dfs(node: Node | null, ans: number[]): void {
    if (!node) {
        return
    }

    // 2. preorder traversal
    ans.push(node.val)

    for (const child of node.children) {
        dfs(child, ans)
    }
}

function preorder(root: Node | null): number[] {
    const ans: number[] = []

    dfs(root, ans)

    return ans
}

export { preorder }
