// <Recursion, DFS, Topological Sorting>
// Time: O(n + m)
// Space: O(n + m)
//        n for the number of nodes
//        m for the number of edges

class MyGraph {
    private n: number
    private graph: number[][]
    private reversedGraph: number[][]
    private inDegree: number[]

    public constructor(graph: number[][]) {
        this.n = graph.length
        this.graph = graph
        this.reversedGraph = Array.from({ length: this.n }, () => [])
        this.inDegree = new Array(this.n).fill(0)
        this.init()
    }

    private init() {
        for (let i = 0; i < this.n; ++i) {
            for (const j of this.graph[i]) {
                this.reversedGraph[j].push(i)
            }

            this.inDegree[i] = this.graph[i].length
        }
    }

    // 1. dfs
    private isSafe(i: number): boolean {
        // visiting or (visited and no cycle)
        if (this.inDegree[i] !== this.graph[i].length) {
            return this.inDegree[i] === -Infinity
        }

        --this.inDegree[i]

        for (const neighbor of this.graph[i]) {
            if (!this.isSafe(neighbor)) {
                return false
            }
        }

        this.inDegree[i] = -Infinity // mark as visited and no cycle

        return true
    }

    public iterate(): number[] {
        const safeNodes: number[] = []

        for (let i = 0; i < this.n; ++i) {
            if (this.isSafe(i)) {
                safeNodes.push(i)
            }
        }

        return safeNodes
    }
}

function eventualSafeNodes(graph: number[][]): number[] {
    const myGraph = new MyGraph(graph)

    return myGraph.iterate()
}

export { eventualSafeNodes }
