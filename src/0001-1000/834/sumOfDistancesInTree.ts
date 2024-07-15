// *Time Limit Exceeded
// <BFS, Queue, HashTable>
// Time: O(n^2)
// Space: O(n)

class MyGraph {
    private n: number
    private graph: number[][]

    public constructor(n: number, edges: number[][]) {
        this.n = n
        this.graph = Array.from({ length: n }, () => [])

        for (const [i, j] of edges) {
            this.graph[i].push(j)
            this.graph[j].push(i)
        }
    }

    public bfs(): number[] {
        const sums: number[] = []

        for (let i = 0; i < this.n; ++i) {
            const visited: boolean[] = new Array(this.n).fill(false)
            let queue: number[] = [i]
            let newQueue: number[]
            let sum = 0
            let depth = 1

            while (queue.length) {
                newQueue = []

                for (const curNodeIndex of queue) {
                    for (const neighborIndex of this.graph[curNodeIndex]) {
                        if (!visited[neighborIndex]) {
                            sum += depth
                            newQueue.push(neighborIndex)
                        }
                    }

                    visited[curNodeIndex] = true
                }

                ++depth
                queue = newQueue
            }

            sums.push(sum)
        }

        return sums
    }
}

function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    // edge cases
    if (n === 0 || !edges.length) {
        return [0]
    }

    const myGraph = new MyGraph(n, edges)

    return myGraph.bfs()
}

export { sumOfDistancesInTree }
