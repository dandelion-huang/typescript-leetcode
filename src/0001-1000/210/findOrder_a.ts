import { visitingStatus } from 'constants/vistingStatus'

const { VISITED, VISITING, INITIAL } = visitingStatus

// <Recursion, DFS>
// Time: O(n + m)
// Space: O(n)
//        n for the number of courses
//        m for the number of prerequisites

class MyGraph {
    private n: number
    private graph: number[][]
    private status: number[]
    private attendedCourses: number[]

    public constructor(numCourses: number, prerequisites: number[][]) {
        this.n = numCourses
        this.graph = Array.from({ length: this.n }, () => [])
        this.status = new Array(this.n).fill(INITIAL)
        this.attendedCourses = []
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
        this.attendedCourses.unshift(i) // add to the attended courses

        return false
    }

    public genAttendedCourses(): number[] {
        for (let i = 0; i < this.n; ++i) {
            if (this.isCyclic(i)) {
                this.attendedCourses = []

                break
            }
        }

        return this.attendedCourses
    }
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const myGraph = new MyGraph(numCourses, prerequisites)

    return myGraph.genAttendedCourses()
}

export { findOrder }
