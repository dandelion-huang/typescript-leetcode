// <Prefix Sum>
// Time: O(n^2)
// Space: O(k^2)

function prefixSum(grid: [string, string][]) {
    const n = grid.length
    const preSum: number[][] = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0))

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            preSum[i + 1][j + 1] =
                preSum[i + 1][j] + preSum[i][j + 1] - preSum[i][j] + (grid[i][j] === 'B' ? 1 : 0)
        }
    }

    return preSum
}

// (x, y) is the bottom-right corner of the square
function hasImplicitSquare(preSum: number[][], x: number, y: number, k: number): boolean {
    const bCount =
        preSum[x + 1][y + 1] -
        preSum[x - k + 1][y + 1] -
        preSum[x + 1][y - k + 1] +
        preSum[x - k + 1][y - k + 1]

    return bCount <= 1 || bCount >= k ** 2 - 1
}

function canMakeSquare(grid: [string, string][]): boolean {
    const n = grid.length
    const k = n - 1
    const preSum = prefixSum(grid)

    for (let i = k - 1; i < n; ++i) {
        for (let j = k - 1; j < n; ++j) {
            if (hasImplicitSquare(preSum, i, j, k)) return true
        }
    }

    return false
}

export { canMakeSquare }
