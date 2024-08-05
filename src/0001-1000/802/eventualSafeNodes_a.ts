import { visitingStatus } from 'constants/vistingStatus'

const { VISITED, VISITING, INITIAL } = visitingStatus

// <Recursion, DFS, Graph Coloring>
// Time: O(n + m)
// Space: O(n)
//        n for the number of nodes
//        m for the number of edges

class MyGraph {
    private n: number
    private graph: number[][]
    private status: number[]

    public constructor(graph: number[][]) {
        this.n = graph.length
        this.graph = graph
        this.status = new Array(this.n).fill(INITIAL)
    }

    // 1. dfs
    private isSafe(i: number): boolean {
        // visiting or visited
        if (this.status[i] !== INITIAL) {
            return this.status[i] === VISITED
        }

        this.status[i] = VISITING // mark as visiting

        for (const neighbor of this.graph[i]) {
            if (!this.isSafe(neighbor)) {
                return false
            }
        }

        this.status[i] = VISITED // mark as visited

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
