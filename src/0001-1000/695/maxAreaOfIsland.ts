import { dx, dy } from 'constants/directions'

// <Recursion, DFS>
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

    // 1. dfs
    private dfs(x: number, y: number): number {
        // out of boundary or sea
        if (x < 0 || x >= this.n || y < 0 || y >= this.m || !this.grid[x][y]) {
            return 0
        }

        // visited
        if (this.grid[x][y] === -1) {
            return 0
        }

        this.grid[x][y] = -1 // mark as visited

        let area = 1

        for (let i = 0; i < 4; ++i) {
            const [px, py] = [x + dx[i], y + dy[i]]

            area += this.dfs(px, py)
        }

        return area
    }

    public countMaxAreaOfIslands() {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.m; ++j) {
                // land
                if (this.grid[i][j]) {
                    this.maxAreaOfIsland = Math.max(this.maxAreaOfIsland, this.dfs(i, j))
                }
            }
        }
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

    myMap.countMaxAreaOfIslands()

    return myMap.getMaxAreaOfIsland()
}

export { maxAreaOfIsland }
