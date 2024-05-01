import { Node } from 'utils/N-aryTreeNode'

// <Stack>
// Time: O(n)
// Space: O(n)

function preorder(root: Node | null): number[] {
    const ans: number[] = []

    // edge cases
    if (!root) {
        return ans
    }

    const stack = [root]

    // 1. iteration
    while (stack.length) {
        // 2. preorder traversal
        const node = stack.pop()!

        ans.push(node.val)

        for (let i = node.children.length - 1; i >= 0; --i) {
            stack.push(node.children[i])
        }
    }

    return ans
}

export { preorder }
