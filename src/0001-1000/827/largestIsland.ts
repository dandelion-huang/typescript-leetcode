import { dx, dy } from 'constants/directions'

// Let's call the sea which may be transformed into land as "beach"

// <Recursion, DFS, HashTable>
// Time: O(n^2)
// Space: O(n^2)

class MyMap {
    private grid: number[][]
    private n: number
    private potentialLargestIslandArea: number
    private curIslandColor: number // used to mark the color of each island
    private islandAreaMap: Map<number, number> // Map<islandColor, area>

    public constructor(grid: number[][]) {
        this.grid = grid
        this.n = grid.length
        this.potentialLargestIslandArea = 0
        this.curIslandColor = 2
        this.islandAreaMap = new Map()
    }

    // 1. dfs
    private dfsCountArea(x: number, y: number): number {
        // out of boundary or not unvisited land
        if (x < 0 || x >= this.n || y < 0 || y >= this.n || this.grid[x][y] !== 1) {
            return 0
        }

        this.grid[x][y] = this.curIslandColor // mark as visited and paint new color

        let area = 1

        for (let i = 0; i < 4; ++i) {
            const [px, py] = [x + dx[i], y + dy[i]]

            area += this.dfsCountArea(px, py)
        }

        return area
    }

    public countExistingIslandArea(): void {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.n; ++j) {
                // land
                if (this.grid[i][j] === 1) {
                    this.islandAreaMap.set(this.curIslandColor, this.dfsCountArea(i, j))
                    this.potentialLargestIslandArea = Math.max(
                        this.potentialLargestIslandArea,
                        this.islandAreaMap.get(this.curIslandColor)!,
                    )
                    ++this.curIslandColor // update cur color
                }
            }
        }
    }

    private countPotentialArea(x: number, y: number): number {
        const visited = new Set<number>([0])
        let curPotentialArea = 1

        for (let k = 0; k < 4; ++k) {
            const [px, py] = [x + dx[k], y + dy[k]]

            if (
                px >= 0 &&
                px < this.n &&
                py >= 0 &&
                py < this.n &&
                !visited.has(this.grid[px][py])
            ) {
                visited.add(this.grid[px][py])
                curPotentialArea += this.islandAreaMap.get(this.grid[px][py])!
            }
        }

        return curPotentialArea
    }

    public countPotentialLargestIslandArea(): void {
        for (let i = 0; i < this.n; ++i) {
            for (let j = 0; j < this.n; ++j) {
                // sea
                if (this.grid[i][j] === 0) {
                    const curPotentialArea = this.countPotentialArea(i, j)

                    this.potentialLargestIslandArea = Math.max(
                        this.potentialLargestIslandArea,
                        curPotentialArea,
                    )
                }
            }
        }
    }

    public getPotentialLargestIslandArea(): number {
        return this.potentialLargestIslandArea
    }
}

function largestIsland(grid: number[][]): number {
    // edge cases
    if (!grid.length) {
        return 0
    }

    const myMap = new MyMap(grid)

    myMap.countExistingIslandArea()
    myMap.countPotentialLargestIslandArea()

    return myMap.getPotentialLargestIslandArea()
}

export { largestIsland }
