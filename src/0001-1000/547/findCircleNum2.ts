// <Iteration, BFS, Queue>
// Time: O(n^2)
// Space: O(n)

// 1. bfs
function bfs(isConnected: number[][], visited: boolean[], n: number, index: number): void {
    const queue = [index]

    while (queue.length) {
        const i = queue.shift()!

        visited[i] = true

        for (let j = 0; j < n; ++j) {
            if (isConnected[i][j] === 1 && !visited[j]) {
                queue.push(j)
            }
        }
    }
}

function iterate(isConnected: number[][]): number {
    const n = isConnected.length // constraint: m === n
    const visited: boolean[] = new Array(n).fill(false)
    let ans = 0

    for (let index = 0; index < n; ++index) {
        if (!visited[index]) {
            bfs(isConnected, visited, n, index)
            ++ans
        }
    }

    return ans
}

function findCircleNum(isConnected: number[][]): number {
    // edge cases
    if (!isConnected.length) {
        return 0
    }

    return iterate(isConnected)
}

export { findCircleNum }
