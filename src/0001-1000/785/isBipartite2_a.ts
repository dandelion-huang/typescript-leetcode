import { visitingStatus } from 'constants/vistingStatus'

const { VISITED: WHITE, VISITING: BLACK, INITIAL } = visitingStatus

// <Iteration, BFS, Graph Coloring>
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
    private status: number[]

    public constructor(graph: number[][]) {
        this.n = graph.length
        this.graph = graph
        this.status = new Array(this.n).fill(INITIAL)
    }

    // 1.bfs
    public bfs(): boolean {
        for (let i = 0; i < this.n; ++i) {
            if (this.status[i] === INITIAL) {
                if (!this.processCurNode(i)) {
                    return false
                }
            }
        }

        return true
    }

    private processCurNode(i: number): boolean {
        const queue: number[] = [i]

        this.status[i] = WHITE

        while (queue.length) {
            const curNode = queue.shift()!
            const neighborColor = getOppositeColor(this.status[curNode])

            if (!this.processNeighbor(curNode, neighborColor, queue)) {
                return false
            }
        }

        return true
    }

    private processNeighbor(i: number, color: number, queue: number[]): boolean {
        for (const neighbor of this.graph[i]) {
            if (this.status[neighbor] === INITIAL) {
                this.status[neighbor] = color
                queue.push(neighbor)
                continue
            }

            if (this.status[neighbor] !== color) {
                return false
            }
        }

        return true
    }
}

function isBipartite(graph: number[][]): boolean {
    // edge cases
    if (!graph.length) {
        return true
    }

    const myGraph = new MyGraph(graph)

    return myGraph.bfs()
}

export { isBipartite }
