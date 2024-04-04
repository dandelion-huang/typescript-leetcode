import { Node } from 'utils/N-aryTreeNode'

// Time: O(n)
// Space: O(n)

function postorder(root: Node | null): number[] {
    const ans: number[] = []

    // 1. dfs
    function dfs(node: Node | null): void {
        if (node === null) {
            return
        }

        for (const child of node.children) {
            dfs(child)
        }

        // 2. postorder traversal
        ans.push(node.val)
    }

    dfs(root)

    return ans
}

export { postorder }
