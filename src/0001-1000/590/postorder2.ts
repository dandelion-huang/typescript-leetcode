import { Node } from 'classes/N-aryTreeNode'

// <Iteration, DFS, Stack, Map>
// Time: O(n)
// Space: O(n)

// 1. dfs
function iterate(node: Node | null): number[] {
    const ans: number[] = []
    const stack: Node[] = []
    const nextIndex = new Map<Node, number>()
    let index = 0

    while (node || stack.length) {
        // 2. postorder traversal
        while (node) {
            stack.push(node)

            if (!node.children) {
                break
            }

            nextIndex.set(node, 1)
            node = node.children[0]
        }

        node = stack[stack.length - 1]

        index = nextIndex.get(node) ?? 0

        if (index < node.children.length) {
            nextIndex.set(node, index + 1)
            node = node.children[index]
        } else {
            stack.pop()
            ans.push(node.val)
            nextIndex.delete(node) // optional
            node = null
        }
    }

    return ans
}

function postorder(root: Node | null): number[] {
    // edge cases
    if (!root) {
        return []
    }

    return iterate(root)
}

export { postorder }
