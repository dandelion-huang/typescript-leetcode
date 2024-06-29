import { dx, dy } from '0001-1000/200/constants'

// <Recursion, DFS>
// Time: O(nm)
// Space: O(nm)

class MyIsland {
    private grid: number[][]
    private n: number
    private m: number
    private perimeter: number

    public constructor(grid: number[][]) {
        this.grid = grid
        this.n = grid.length
        this.m = grid[0].length
        this.perimeter = 0
    }

    // 1. dfs
    private countSides(x: number, y: number): number {
        if (x < 0 || x >= this.n || y < 0 || y >= this.m || !this.grid[x][y]) {
            return 1
        }

        // visited
        if (this.grid[x][y] === -1) {
            return 0
        }

        // mark as visited
        this.grid[x][y] = -1

        let sides = 0

        for (let i = 0; i < 4; ++i) {
            const [px, py] = [x + dx[i], y + dy[i]]

            sides += this.countSides(px, py)
        }

        return sides
    }

    public countPerimeter(): void {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.m; ++j) {
                if (this.grid[i][j]) {
                    this.perimeter += this.countSides(i, j)
                }
            }
        }
    }

    public getPerimeter(): number {
        return this.perimeter
    }
}

function islandPerimeter(grid: number[][]): number {
    // edge cases
    if (!grid.length) {
        return 0
    }

    const myIsland = new MyIsland(grid)

    myIsland.countPerimeter()

    return myIsland.getPerimeter()
}

export { islandPerimeter }
