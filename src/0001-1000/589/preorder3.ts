import { Node } from 'classes/N-aryTreeNode'

// <Ieration, DFS, Stack>
// Time: O(n)
// Space: O(n)

// 1. dfs
function iterate(node: Node | null): number[] {
    const ans: number[] = []
    const stack = [node]

    while (stack.length) {
        // 2. preorder traversal
        const curNode = stack.pop()!

        ans.push(curNode.val)

        for (let i = curNode.children.length - 1; i >= 0; --i) {
            stack.push(curNode.children[i])
        }
    }

    return ans
}

function preorder(root: Node | null): number[] {
    // edge cases
    if (!root) {
        return []
    }

    return iterate(root)
}

export { preorder }
