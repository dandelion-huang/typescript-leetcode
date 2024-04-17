import { Node } from 'utils/N-aryTreeNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function postorder(root: Node | null): number[] {
    const ans: number[] = []

    // 1. dfs
    function dfs(node: Node | null): void {
        if (!node) {
            return
        }

        // 2. postorder traversal
        for (const child of node.children) {
            dfs(child)
        }

        ans.push(node.val)
    }

    dfs(root)

    return ans
}

export { postorder }
