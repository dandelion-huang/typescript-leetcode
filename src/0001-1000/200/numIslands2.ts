import { dx, dy } from 'constants/directions'

// <Iteration, BFS, Queue>
// Time: O(nm)
// Space: O(nm)

class MyMap {
    private grid: string[][]
    private n: number
    private m: number

    public constructor(grid: string[][]) {
        this.grid = grid
        this.n = grid.length
        this.m = grid[0].length
    }

    // 1. bfs
    private bfs(x: number, y: number) {
        const queue: [number, number][] = [[x, y]]

        this.grid[x][y] = '-1' // mark as visited

        while (queue.length) {
            const [curX, curY] = queue.shift()!

            for (let k = 0; k < 4; ++k) {
                const [px, py] = [curX + dx[k], curY + dy[k]]

                // can also be wrote as: this.grid?.[px]?.[py] === '1'
                if (px >= 0 && px < this.n && py >= 0 && py < this.m && this.grid[px][py] === '1') {
                    queue.push([px, py])
                    this.grid[px][py] = '-1' // mark as visited
                }
            }
        }
    }

    public iterate(): number {
        let numberOfIslands = 0

        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.m; ++j) {
                if (this.grid[i][j] === '1') {
                    ++numberOfIslands
                    this.bfs(i, j)
                }
            }
        }

        return numberOfIslands
    }
}

function numIslands(grid: string[][]): number {
    // edge cases
    if (!grid.length) {
        return 0
    }

    const myMap = new MyMap(grid)

    return myMap.iterate()
}

export { numIslands }
