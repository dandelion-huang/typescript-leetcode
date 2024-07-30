// ref: classes/UnionFind

// <Union Find>
// Time: O((n + m)α(v)), α() is the inverse Ackermann function
// Space: O(v)
//        n for the number of equations (equations.length === values.length)
//        m for the number of queries
//        v for the nubmer of unique variables in the equations

class UnionFind {
    parents: number[]
    weights: number[]

    public constructor(n: number) {
        this.parents = Array.from({ length: n }, (_, i) => i)
        this.weights = new Array(n).fill(1.0)
    }

    public find(x: number): number {
        if (this.parents[x] !== x) {
            const parent = this.parents[x]
            this.parents[x] = this.find(this.parents[x]) // path compression
            this.weights[x] *= this.weights[parent]
        }

        return this.parents[x]
    }

    public union(x: number, y: number, value: number): void {
        const rootX = this.find(x)
        const rootY = this.find(y)

        if (rootX !== rootY) {
            this.parents[rootX] = rootY
            this.weights[rootX] = (this.weights[y] / this.weights[x]) * value
        }
    }

    public calcDivision(x: number, y: number): number {
        const rootX = this.find(x)
        const rootY = this.find(y)

        if (rootX === rootY) {
            return this.weights[x] / this.weights[y]
        }

        return -1.0
    }
}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    // edge cases, constraints: equations.length === values.length
    if (!equations.length || !queries.length) {
        return []
    }

    const n = equations.length
    const uf = new UnionFind(n * 2)
    const map = new Map<string, number>() // Map<variable, index>
    let index = 0

    for (let i = 0; i < n; ++i) {
        const [x, y] = equations[i]

        if (!map.has(x)) {
            map.set(x, index++)
        }

        if (!map.has(y)) {
            map.set(y, index++)
        }

        uf.union(map.get(x)!, map.get(y)!, values[i])
    }

    const m = queries.length
    const ans: number[] = []

    for (let i = 0; i < m; ++i) {
        const [x, y] = queries[i]
        const indexX = map.get(x)
        const indexY = map.get(y)

        if (indexX === undefined || indexY === undefined) {
            ans.push(-1.0)
            continue
        }

        ans.push(uf.calcDivision(indexX, indexY))
    }

    return ans
}

export { calcEquation }
