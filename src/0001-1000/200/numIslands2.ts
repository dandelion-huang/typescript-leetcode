import { dx, dy } from '0001-1000/200/constants'

// <Recursion, DFS>
// Time: O(nm)
// Space: O(nm)

class MyMap {
    private grid: string[][]
    private n: number
    private m: number
    private numberOfIslands: number
    public constructor(grid: string[][]) {
        this.grid = grid
        this.n = grid.length
        this.m = grid[0].length
        this.numberOfIslands = 0
    }

    // 1. dfs
    private dfs(x: number, y: number): void {
        if (x < 0 || x >= this.n || y < 0 || y >= this.m || this.grid[x][y] !== '1') {
            return
        }

        // visited
        if (this.grid[x][y] === '-1') {
            return
        }

        // mark as visited
        this.grid[x][y] = '-1'

        for (let i = 0; i < 4; ++i) {
            const [px, py] = [x + dx[i], y + dy[i]]

            this.dfs(px, py)
        }
    }

    public countIslands(): void {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.m; ++j) {
                if (this.grid[i][j] === '1') {
                    ++this.numberOfIslands
                    this.dfs(i, j)
                }
            }
        }
    }

    public getNumberOfIslands(): number {
        return this.numberOfIslands
    }
}

function numIslands(grid: string[][]): number {
    // edge cases
    if (!grid.length) {
        return 0
    }

    const myMap = new MyMap(grid)

    myMap.countIslands()

    return myMap.getNumberOfIslands()
}

export { numIslands }
