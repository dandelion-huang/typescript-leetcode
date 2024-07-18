import { dx, dy } from 'constants/directions'

// <Iteration, BFS, Queue>
// Time: O(nm)
// Space: O(nm)

class MyMap {
    private grid: number[][]
    private n: number
    private m: number
    private maxAreaOfIsland: number

    public constructor(grid: number[][]) {
        this.grid = grid
        this.n = grid.length
        this.m = grid[0].length
        this.maxAreaOfIsland = 0
    }

    // 1. bfs
    private bfs(x: number, y: number) {
        const queue: [number, number][] = [[x, y]]
        let areaOfCurIsland = 0

        this.grid[x][y] = -1 // mark as visited

        while (queue.length) {
            const [curX, curY] = queue.shift()!

            ++areaOfCurIsland

            for (let k = 0; k < 4; ++k) {
                const [px, py] = [curX + dx[k], curY + dy[k]]

                if (px >= 0 && px < this.n && py >= 0 && py < this.m && this.grid[px][py] === 1) {
                    queue.push([px, py])
                    this.grid[px][py] = -1 // mark as visited
                }
            }
        }

        this.maxAreaOfIsland = Math.max(this.maxAreaOfIsland, areaOfCurIsland)
    }

    public iterate(): number {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.m; ++j) {
                if (this.grid[i][j] === 1) {
                    this.bfs(i, j)
                }
            }
        }

        return this.getMaxAreaOfIsland()
    }

    public getMaxAreaOfIsland(): number {
        return this.maxAreaOfIsland
    }
}

function maxAreaOfIsland(grid: number[][]): number {
    // edge cases
    if (!grid.length) {
        return 0
    }

    const myMap = new MyMap(grid)

    return myMap.iterate()
}

export { maxAreaOfIsland }
