import { TreeNode } from 'classes/BinaryTreeNode'
import { serialize } from '0001-1000/297/serializeAndDeserialize'

// Notice that the root is the root of the BST

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

/*
 * Encodes a tree to a single string. (IMPORTED)
 */

/*
 * Decodes your encoded data to tree.
 */
function dfsDeserialize(
    dataList: string[],
    lower: number = -Infinity,
    upper: number = Infinity,
): TreeNode | null {
    // edge cases
    if (dataList[0] === '#') {
        dataList.shift()
        return null
    }

    const valLast = parseInt(dataList[dataList.length - 1], 10)

    if (valLast < lower || valLast > upper) {
        return null
    }

    const val = parseInt(dataList[0], 10)
    const node = new TreeNode(val)

    dataList.shift()
    node.left = dfsDeserialize(dataList, lower, val)
    node.right = dfsDeserialize(dataList, val, upper)

    return node
}

function deserialize(data: string): TreeNode | null {
    const dataList = data.split(',')

    return dfsDeserialize(dataList)
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
function serializeAndDeserialize(root: TreeNode | null): TreeNode | null {
    return deserialize(serialize(root))
}

export { deserialize, serialize, serializeAndDeserialize }
