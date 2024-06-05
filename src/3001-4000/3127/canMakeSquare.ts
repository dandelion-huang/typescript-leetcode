// <Brute Force>
// Time: O(n^2 * k^2)
// Space: O(1)

// (x, y) is the top-left corner of the square
function hasImplicitSquare(grid: [string, string][], x: number, y: number): boolean {
    let bCount = 0

    if (grid[x][y] === 'B') ++bCount
    if (grid[x + 1][y] === 'B') ++bCount
    if (grid[x][y + 1] === 'B') ++bCount
    if (grid[x + 1][y + 1] === 'B') ++bCount

    return bCount !== 2
}

function canMakeSquare(grid: [string, string][]): boolean {
    return (
        hasImplicitSquare(grid, 0, 0) ||
        hasImplicitSquare(grid, 1, 0) ||
        hasImplicitSquare(grid, 0, 1) ||
        hasImplicitSquare(grid, 1, 1)
    )
}

export { canMakeSquare }
