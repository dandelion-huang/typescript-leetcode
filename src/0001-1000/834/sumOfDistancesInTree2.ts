// <DFS, Dynamic Programming>
// Time: O(n)
// Space: O(n)

// In function dfs,
// we calculate the ans in a tree which is rooted at u
//    dp[u] = dp[v] + children[v]

// In function dfs2,
// we iteratively change the root of the tree
//    dp[u] = dp[u] - (dp[v] + children[v])
//    dp[v] = dp[v] + (dp[u] + children[u])

class MyGraph {
    private graph: number[][]
    private ans: number[]
    private children: number[]
    private dp: number[]

    public constructor(n: number, edges: number[][]) {
        this.graph = Array.from({ length: n }, () => [])
        this.ans = []
        this.children = new Array(n).fill(0)
        this.dp = new Array(n).fill(0)

        for (const [i, j] of edges) {
            this.graph[i].push(j)
            this.graph[j].push(i)
        }
    }

    public dfs(u: number, f: number): void {
        this.children[u] = 1
        this.dp[u] = 0

        for (const v of this.graph[u]) {
            // visited
            if (v === f) {
                continue
            }

            this.dfs(v, u)
            this.children[u] += this.children[v]
            this.dp[u] += this.dp[v] + this.children[v]
        }
    }

    public dfs2(u: number, f: number): void {
        this.ans[u] = this.dp[u]
        for (const v of this.graph[u]) {
            // visited
            if (v === f) {
                continue
            }

            const cu = this.children[u]
            const cv = this.children[v]
            const pu = this.dp[u]
            const pv = this.dp[v]

            this.children[u] -= this.children[v]
            this.dp[u] -= this.dp[v] + this.children[v]
            this.children[v] += this.children[u]
            this.dp[v] += this.dp[u] + this.children[u]

            this.dfs2(v, u)

            this.children[u] = cu
            this.children[v] = cv
            this.dp[u] = pu
            this.dp[v] = pv
        }
    }

    public getAns(): number[] {
        return this.ans
    }
}

function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    // edge cases
    if (n === 0 || !edges.length) {
        return [0]
    }

    const myGraph = new MyGraph(n, edges)

    myGraph.dfs(0, -1)
    myGraph.dfs2(0, -1)

    return myGraph.getAns()
}

export { sumOfDistancesInTree }
