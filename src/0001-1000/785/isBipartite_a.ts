import { visitingStatus } from 'constants/vistingStatus'

const { VISITED: WHITE, VISITING: BLACK, INITIAL } = visitingStatus

// <Recursion, DFS, Graph Coloring>
// Time: O(n + m)
// Space: O(n)
//        n for the number of nodes
//        m for the number of edges

function getOppositeColor(color: number): number {
    return color === WHITE ? BLACK : WHITE
}

class MyGraph {
    private n: number
    private graph: number[][]
    private isBipartite: boolean
    private status: number[]

    public constructor(graph: number[][]) {
        this.n = graph.length
        this.graph = graph
        this.isBipartite = true
        this.status = new Array(this.n).fill(INITIAL)
        this.initStatus()
    }

    private initStatus() {
        for (let i = 0; i < this.n; ++i) {
            if (this.status[i] === INITIAL) {
                this.dfs(i, WHITE)
            }
        }
    }

    // 1. dfs
    private dfs(i: number, status: number) {
        this.status[i] = status

        for (const neighbor of this.graph[i]) {
            if (this.status[neighbor] === INITIAL) {
                this.dfs(neighbor, getOppositeColor(status))
            }

            if (this.status[neighbor] === status) {
                this.isBipartite = false
                return
            }
        }
    }

    public getIsBipartite(): boolean {
        return this.isBipartite
    }
}

function isBipartite(graph: number[][]): boolean {
    // edge cases
    if (!graph.length) {
        return true
    }

    const myGraph = new MyGraph(graph)

    return myGraph.getIsBipartite()
}

export { isBipartite }
