import { Node } from 'classes/N-aryTreeNode'

// <Iteration, DFS, Stack, Set>
// Time: O(n)
// Space: O(n)

// 1. dfs
function iterate(node: Node): number[] {
    const ans: number[] = []
    const stack: Node[] = [node]
    const visited = new Set<Node>()

    while (stack.length) {
        // 2. postorder traversal
        const curNode = stack[stack.length - 1]

        if (!curNode.children.length || visited.has(curNode)) {
            stack.pop()
            ans.push(curNode.val)
            continue
        }

        for (let i = curNode.children.length - 1; i >= 0; --i) {
            stack.push(curNode.children[i])
        }

        visited.add(curNode)
    }

    return ans
}

function postorder(root: Node | null): number[] {
    if (!root) {
        return []
    }

    return iterate(root)
}

export { postorder }
