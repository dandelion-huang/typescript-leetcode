import { lowbit } from 'utils/lowbit'

/**
 * Fenwick Tree (Binary Indexed Tree, BIT)
 */

class BinaryIndexedTree<T> {
    private readonly tree: T[]

    constructor(
        public size: number,
        readonly defaultValue: T,
        readonly operation: (existing: T, applied: T) => T,
    ) {
        this.tree = new Array(size + 1).fill(defaultValue)
    }

    static lowbit(n: number): number {
        return lowbit(n)
    }

    query(index: number): T {
        let res = this.defaultValue

        for (let i = index + 1; i > 0; i -= BinaryIndexedTree.lowbit(i)) {
            res = this.operation(res, this.tree[i])
        }

        return res
    }

    update(index: number, value: T) {
        for (let i = index + 1; i < this.tree.length; i += BinaryIndexedTree.lowbit(i)) {
            this.tree[i] = this.operation(this.tree[i], value)
        }
    }
}

export { BinaryIndexedTree }
