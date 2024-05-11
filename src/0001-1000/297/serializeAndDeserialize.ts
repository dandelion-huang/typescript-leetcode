import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

/*
 * Encodes a tree to a single string.
 */
function dfsSerialize(node: TreeNode | null, str: string = ''): string {
    if (!node) {
        str += '#,' // # for null
    } else {
        str += `${node.val},`
        str = dfsSerialize(node.left, str)
        str = dfsSerialize(node.right, str)
    }

    return str
}

function serialize(root: TreeNode | null): string {
    return dfsSerialize(root)
}

/*
 * Decodes your encoded data to tree.
 */
function dfsDeserialize(dataList: string[]): TreeNode | null {
    // edge cases
    if (dataList[0] === '#') {
        dataList.shift()
        return null
    }

    const node = new TreeNode(parseInt(dataList[0], 10))

    dataList.shift()
    node.left = dfsDeserialize(dataList)
    node.right = dfsDeserialize(dataList)

    return node
}

function deserialize(data: string): TreeNode | null {
    const nodes = data.split(',')

    return dfsDeserialize(nodes)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
function serializeAndDeserialize(root: TreeNode | null): TreeNode | null {
    return deserialize(serialize(root))
}

export { deserialize, serialize, serializeAndDeserialize }
