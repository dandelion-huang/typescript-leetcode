import { UnionFind } from 'classes/UnionFind'
import { swap } from 'utils/swap'

class UnionFindWithRank extends UnionFind {
    ranks: number[]

    constructor(n: number) {
        super(n)
        this.ranks = new Array(n).fill(1)
    }

    public find(x: number): number {
        while (this.parents[x] !== x) {
            this.parents[x] = this.find(this.parents[x]) // path compression
            x = this.parents[x]
        }

        return x
    }

    protected update(rootX: number, rootY: number): void {
        if (this.ranks[rootX] === this.ranks[rootY]) {
            ++this.ranks[rootY]
        }

        if (this.ranks[rootX] < this.ranks[rootY]) {
            ;[rootX, rootY] = swap(rootX, rootY)
        }

        this.parents[rootX] = rootY
        --this.count
    }
}

export { UnionFindWithRank }
