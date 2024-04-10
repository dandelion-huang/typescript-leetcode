import { Node } from 'utils/N-aryTreeNode'

// <Stack, Map>
// Time: O(n)
// Space: O(n)

function preorder(root: Node | null): number[] {
    const ans: number[] = []
    // stack
    const stack: Node[] = []
    // map
    const nextIndex = new Map<Node, number>()
    let index = 0

    // 1. iteration
    while (root || stack.length) {
        // 2. preorder traversal
        while (root) {
            ans.push(root.val)
            stack.push(root)

            if (!root.children) {
                break
            }

            nextIndex.set(root, 1)
            root = root.children[0]
        }

        root = stack[stack.length - 1]

        index = nextIndex.get(root) ?? 0

        if (index < root.children.length) {
            nextIndex.set(root, index + 1)
            root = root.children[index]
        } else {
            stack.pop()
            nextIndex.delete(root) // optional
            root = null
        }
    }

    return ans
}

export { preorder }
