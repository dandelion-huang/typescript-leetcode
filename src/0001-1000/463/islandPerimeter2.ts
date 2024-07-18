import { dx, dy } from 'constants/directions'

// <Iteration>
// Time: O(nm)
// Space: O(1)

class MyMap {
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

    private iterate(x: number, y: number): number {
        let sides = 0

        for (let k = 0; k < 4; ++k) {
            const [px, py] = [x + dx[k], y + dy[k]]

            if (px < 0 || px >= this.n || py < 0 || py >= this.m || !this.grid[px][py]) {
                ++sides
            }
        }

        return sides
    }

    public countPerimeter() {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.m; ++j) {
                if (this.grid[i][j]) {
                    this.perimeter += this.iterate(i, j)
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

    const myMap = new MyMap(grid)

    myMap.countPerimeter()

    return myMap.getPerimeter()
}

export { islandPerimeter }
