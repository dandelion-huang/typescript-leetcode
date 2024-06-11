import { TreeNode } from 'classes/BinaryTreeNode'

// <Recursion, DFS>
// Time: O(n)
// Space: O(n)

class MyBst {
    private root: TreeNode
    private childNumMap: Map<TreeNode, number> // Map<node, childNodeNum>
    public constructor(root: TreeNode) {
        this.root = root
        this.childNumMap = new Map()
        this.countChildNum(root)
    }

    private countChildNum(node: TreeNode | null): number {
        if (!node) {
            return 0
        }

        this.childNumMap.set(
            node,
            1 + this.countChildNum(node.left) + this.countChildNum(node.right),
        )

        return this.getChildNum(node)
    }

    private getChildNum(node: TreeNode | null): number {
        if (!node) {
            return 0
        }

        return this.childNumMap.get(node)!
    }

    public kthSmallest(k: number): number {
        let cur: TreeNode | null = this.root

        while (cur) {
            const leftChildNum = this.getChildNum(cur.left)

            if (leftChildNum < k - 1) {
                cur = cur.right
                k -= leftChildNum + 1
            } else if (leftChildNum > k - 1) {
                cur = cur.left
            } else {
                break
            }
        }

        return cur!.val
    }
}

function kthSmallest(root: TreeNode | null, k: number): number {
    // edge cases
    if (!root) {
        return -1
    }

    const bst = new MyBst(root)

    return bst.kthSmallest(k)
}

export { kthSmallest }
