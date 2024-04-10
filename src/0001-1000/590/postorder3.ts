import { Node } from 'utils/N-aryTreeNode'

// <Stack, Set>
// Time: O(n)
// Space: O(n)

function postorder(root: Node | null): number[] {
    const ans: number[] = []

    if (!root) {
        return ans
    }

    // stack
    const stack: Node[] = [root]
    // set
    const visited = new Set<Node>()

    // 1. iteration
    while (stack.length) {
        // 2. postorder traversal
        const node = stack[stack.length - 1]

        if (!node.children.length || visited.has(node)) {
            stack.pop()
            ans.push(node.val)
            continue
        }

        for (let i = node.children.length - 1; i >= 0; --i) {
            stack.push(node.children[i])
        }

        visited.add(node)
    }

    return ans
}

export { postorder }
