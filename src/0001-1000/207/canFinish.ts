// <Recursion, DFS>
// Time: O(n + m)
// Space: O(n + m)
//       n for the number of courses
//       m for the number of prerequisites

class MyGraph {
    private n: number
    private graph: number[][]
    private inDegree: number[]

    public constructor(numCourses: number, prerequisites: number[][]) {
        this.n = numCourses
        this.graph = Array.from({ length: this.n }, () => [])
        this.inDegree = new Array(this.n).fill(0)
        this.initGraph(prerequisites)
        this.initInDegree(prerequisites)
    }

    private initGraph(prerequisites: number[][]) {
        for (const [to, from] of prerequisites) {
            this.graph[from].push(to)
        }
    }

    private initInDegree(prerequisites: number[][]) {
        for (const [to] of prerequisites) {
            ++this.inDegree[to]
        }
    }

    // 1. dfs
    private isCyclic(i: number): boolean {
        // visited and no cycle
        if (this.inDegree[i] === -Infinity) {
            return false
        }

        // visiting the node visited before
        if (this.inDegree[i] === -1) {
            return true
        }

        --this.inDegree[i]

        for (const neighbor of this.graph[i]) {
            if (this.isCyclic(neighbor)) {
                return true
            }
        }

        this.inDegree[i] = -Infinity // mark as visited and no cycle

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
