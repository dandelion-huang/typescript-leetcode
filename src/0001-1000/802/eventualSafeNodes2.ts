// <Iteration, BFS, Queue, Topological Sorting>
// Time: O(n + m)
// Space: O(n + m)
//        n for the number of nodes
//        m for the number of edges

class MyGraph {
    private n: number
    private graph: number[][]
    private reversedGraph: number[][]
    private inDegree: number[]
    private queue: number[]

    public constructor(graph: number[][]) {
        this.n = graph.length
        this.graph = graph
        this.reversedGraph = Array.from({ length: this.n }, () => [])
        this.inDegree = new Array(this.n).fill(0)
        this.queue = []
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

    private initQueue() {
        for (let i = 0; i < this.n; ++i) {
            if (this.inDegree[i] === 0) {
                this.queue.push(i)
            }
        }
    }

    // 1. bfs
    public bfs() {
        this.initQueue()

        while (this.queue.length) {
            const node = this.queue.shift()!

            for (const neighbor of this.reversedGraph[node]) {
                if (--this.inDegree[neighbor] === 0) {
                    this.queue.push(neighbor)
                }
            }
        }
    }

    public iterate(): number[] {
        this.bfs()

        const safeNodes: number[] = []

        for (let i = 0; i < this.n; ++i) {
            if (this.inDegree[i] === 0) {
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
