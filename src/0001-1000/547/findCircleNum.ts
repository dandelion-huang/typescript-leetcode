// <Recursion, DFS>
// Time: O(n^2)
// Space: O(n)

// 1. dfs
function dfs(isConnected: number[][], visited: boolean[], n: number, i: number) {
    for (let j = 0; j < n; ++j) {
        if (isConnected[i][j] === 1 && !visited[j]) {
            visited[j] = true
            dfs(isConnected, visited, n, j)
        }
    }
}

function findCircleNum(isConnected: number[][]): number {
    // edge cases
    if (!isConnected.length) {
        return 0
    }

    const n = isConnected.length // constraint: m === n
    const visited: boolean[] = new Array(n).fill(false)
    let ans = 0

    for (let i = 0; i < n; ++i) {
        if (!visited[i]) {
            dfs(isConnected, visited, n, i)
            ++ans
        }
    }

    return ans
}

export { findCircleNum }
