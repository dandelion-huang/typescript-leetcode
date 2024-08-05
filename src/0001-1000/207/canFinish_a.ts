import { visitingStatus } from 'constants/vistingStatus'

const { VISITED, VISITING, INITIAL } = visitingStatus

// <Recursion, DFS, Graph Coloring>
// Time: O(n + m)
// Space: O(n)
//        n for the number of courses
//        m for the number of prerequisites

class MyGraph {
    private n: number
    private graph: number[][]
    private status: number[]

    public constructor(numCourses: number, prerequisites: number[][]) {
        this.n = numCourses
        this.graph = Array.from({ length: this.n }, () => [])
        this.status = new Array(this.n).fill(INITIAL)
        this.initGraph(prerequisites)
    }

    private initGraph(prerequisites: number[][]) {
        for (const [to, from] of prerequisites) {
            this.graph[from].push(to)
        }
    }

    // 1. dfs
    private isCyclic(i: number): boolean {
        // visited
        if (this.status[i] === VISITED) {
            return false
        }

        // visiting
        if (this.status[i] === VISITING) {
            return true
        }

        this.status[i] = VISITING // mark as visiting

        for (const neighbor of this.graph[i]) {
            if (this.isCyclic(neighbor)) {
                return true
            }
        }

        this.status[i] = VISITED // mark as visited

        return false
    }

    public canAttendAllCourses(): boolean {
        for (let i = 0; i < this.n; ++i) {
            if (this.isCyclic(i)) {
                return false
            }
        }

        return true
    }
}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {
    const myGraph = new MyGraph(numCourses, prerequisites)

    return myGraph.canAttendAllCourses()
}

export { canFinish }
