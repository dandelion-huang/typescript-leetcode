// <Iteration, BFS, Queue, Topological Sorting>
// Time: O(n + m)
// Space: O(n + m)
//        n for the number of courses
//        m for the number of prerequisites

class MyGraph {
    private n: number
    private graph: number[][]
    private inDegree: number[]
    private queue: number[]

    public constructor(numCourses: number, prerequisites: number[][]) {
        this.n = numCourses
        this.graph = Array.from({ length: this.n }, () => [])
        this.inDegree = new Array(this.n).fill(0)
        this.queue = []
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

    private initQueue() {
        for (let i = 0; i < this.n; ++i) {
            if (this.inDegree[i] === 0) {
                this.queue.push(i)
            }
        }
    }

    // 1. bfs
    public bfs(): number[] {
        const courses: number[] = []
        let attendedCourses = 0

        this.initQueue()

        while (this.queue.length) {
            const course = this.queue.shift()!

            courses.push(course)
            ++attendedCourses

            for (const neighbor of this.graph[course]) {
                --this.inDegree[neighbor]

                if (this.inDegree[neighbor] === 0) {
                    this.queue.push(neighbor)
                }
            }
        }

        if (attendedCourses !== this.n) {
            courses.length = 0
        }

        return courses
    }
}

function findOrder(numCourses: number, prerequisites: number[][]): number[] {
    const myGraph = new MyGraph(numCourses, prerequisites)

    return myGraph.bfs()
}

export { findOrder }
