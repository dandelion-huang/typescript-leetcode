abstract class UnionFind {
    count: number
    parents: number[]

    public constructor(n: number) {
        this.count = n
        this.parents = Array.from({ length: n }, (_, i) => i)
    }

    public abstract find(x: number): number

    public union(x: number, y: number): void {
        const rootX = this.find(x)
        const rootY = this.find(y)

        if (rootX !== rootY) {
            this.update(rootX, rootY)
        }
    }

    protected abstract update(rootX: number, rootY: number): void

    public getCount(): number {
        return this.count
    }
}

export { UnionFind }
