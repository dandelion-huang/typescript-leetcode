// <Iteration>
// Time: O(nm)
// Space: O(1)

function islandPerimeter(grid: number[][]): number {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const [n, m] = [grid.length, grid[0].length]
    let ans = 0

    // 1. traverse the grid
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            // 2. examine if the current cell is an island
            if (grid[i][j]) {
                let sides = 0

                for (let k = 0; k < 4; ++k) {
                    const [px, py] = [i + dx[k], j + dy[k]]

                    // if the current cell touches the edge of the grid or water
                    if (px < 0 || px >= n || py < 0 || py >= m || !grid[px][py]) {
                        ++sides
                    }
                }

                ans += sides
            }
        }
    }

    return ans
}

export { islandPerimeter }
