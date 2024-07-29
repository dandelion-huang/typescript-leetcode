import { UnionFindWithSize } from 'classes/UnionFindWithSize'

// <Union Find>
// Time: O(n^2 * α(n)), α() is the inverse Ackermann function
// Space: O(n)

function findCircleNum(isConnected: number[][]): number {
    // edge cases
    if (!isConnected.length) {
        return 0
    }

    const n = isConnected.length // constraint: m === n
    const uf = new UnionFindWithSize(n)

    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < n; ++j) {
            if (isConnected[i][j] === 1) {
                uf.union(i, j)
            }
        }
    }

    return uf.getCount()
}

export { findCircleNum }
