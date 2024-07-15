import { dx, dy } from 'constants/directions'

// <Recursion, BFS>
// Time: O(n^2)
// Space: O(n^2)

class MyMap {
    private grid: number[][]
    private n: number
    private queue: [number, number][]

    public constructor(grid: number[][]) {
        this.grid = grid
        this.n = grid.length
        this.queue = []
    }

    private addLands() {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.n; ++j) {
                // land
                if (this.grid[i][j] === 1) {
                    this.queue.push([i, j])
                }
            }
        }
    }

    // 1. bfs
    public bfs(): number {
        let maxDistance = -1

        this.addLands()

        // edge cases
        if (!this.queue.length || this.queue.length === this.n ** 2) {
            return maxDistance
        }

        while (this.queue.length) {
            const length = this.queue.length

            for (let i = 0; i < length; ++i) {
                const [x, y] = this.queue.shift()!

                for (let j = 0; j < this.n; ++j) {
                    const [px, py] = [x + dx[j], y + dy[j]]

                    if (
                        px >= 0 &&
                        px < this.n &&
                        py >= 0 &&
                        py < this.n &&
                        this.grid[px][py] === 0
                    ) {
                        this.grid[px][py] = -1
                        this.queue.push([px, py])
                    }
                }
            }

            ++maxDistance
        }

        return maxDistance
    }
}

function maxDistance(grid: number[][]): number {
    // edge cases
    if (!grid.length) {
        return -1
    }

    const myMap = new MyMap(grid)

    return myMap.bfs()
}

export { maxDistance }
