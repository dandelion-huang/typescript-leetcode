// <Iteration>
// Time: O(nm)
// Space: O(1)

function islandPerimeter(grid: number[][]): number {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const [n, m] = [grid.length, grid[0].length]
    let ans = 0

    // calculate the sides of the island
    function getSides(x: number, y: number): number {
        let sides = 0

        for (let k = 0; k < 4; ++k) {
            const [px, py] = [x + dx[k], y + dy[k]]

            // if the current cell touches the edge of the grid or water
            if (px < 0 || px >= n || py < 0 || py >= m || !grid[px][py]) {
                ++sides
            }
        }

        return sides
    }

    // 1. traverse the grid
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            // 2. examine if the current cell is an island
            if (grid[i][j]) {
                ans += getSides(i, j)
            }
        }
    }

    return ans
}

export { islandPerimeter }
