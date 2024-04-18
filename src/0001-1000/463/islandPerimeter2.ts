// <DFS>
// Time: O(nm)
// Space: O(nm)

function islandPerimeter(grid: number[][]): number {
    const dx = [0, 1, 0, -1]
    const dy = [1, 0, -1, 0]
    const [n, m] = [grid.length, grid[0].length]

    // 1.dfs
    function dfs(x: number, y: number): number {
        if (x < 0 || x >= n || y < 0 || y >= m || !grid[x][y]) {
            return 1
        }

        // visited
        if (grid[x][y] === -1) {
            return 0
        }

        // mark as visited
        grid[x][y] = -1

        let sides = 0

        for (let i = 0; i < 4; ++i) {
            const [px, py] = [x + dx[i], y + dy[i]]

            sides += dfs(px, py)
        }

        return sides
    }

    let ans = 0

    // 2. traverse the grid
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (grid[i][j]) {
                ans += dfs(i, j)
            }
        }
    }

    return ans
}

export { islandPerimeter }
