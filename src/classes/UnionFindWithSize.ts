import { UnionFind } from 'classes/UnionFind'
import { swap } from 'utils/swap'

// <Recursion>

class UnionFindWithSize extends UnionFind {
    sizes: number[]

    constructor(n: number) {
        super(n)
        this.sizes = new Array(n).fill(1)
    }

    public find(x: number): number {
        if (this.parents[x] === x) {
            return x
        }

        this.parents[x] = this.find(this.parents[x]) // path compression

        return this.parents[x]
    }

    protected update(rootX: number, rootY: number): void {
        if (this.sizes[rootX] < this.sizes[rootY]) {
            ;[rootX, rootY] = swap(rootX, rootY)
        }

        this.parents[rootX] = rootY
        this.sizes[rootY] += this.sizes[rootX]
        --this.count
    }
}

export { UnionFindWithSize }
