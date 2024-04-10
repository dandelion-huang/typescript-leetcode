import { Node } from 'utils/N-aryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function preorder(root: Node | null): number[] {
    const ans: number[] = []

    // 1. dfs
    function dfs(node: Node | null): void {
        if (node === null) {
            return
        }

        // 2. preorder traversal
        ans.push(node.val)

        for (const child of node.children) {
            dfs(child)
        }
    }

    dfs(root)

    return ans
}

export { preorder }
