import { TreeNode } from 'utils/BinaryTreeNode'

// <Queue>
// Time: O(n)
// Space: O(n)

// 1. bfs
function bfs(node: TreeNode, val: number, depth: number): void {
    // 2. level-order traversal
    let queue: (TreeNode | null)[] = [node]

    // skip the root
    for (let i = 1; i < depth - 1; ++i) {
        queue = queue
            .map((curLevelNode) => [curLevelNode!.left, curLevelNode!.right].filter(Boolean))
            .flat()
    }

    for (const curLevelNode of queue) {
        curLevelNode!.left = new TreeNode(val, curLevelNode!.left, null)
        curLevelNode!.right = new TreeNode(val, null, curLevelNode!.right)
    }
}

function addOneRow(root: TreeNode | null, val: number, depth: number): TreeNode | null {
    // edge cases
    // just assume that everything might be wrong
    if (!root) {
        // root should not be null according to the constraints
        return new TreeNode(val, null, null)
    }

    if (depth <= 1) {
        // depth should not be negetive or zero according to the constraints
        return new TreeNode(val, root, null)
    }

    bfs(root, val, depth)

    return root
}

export { addOneRow }
