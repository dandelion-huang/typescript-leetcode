// ref: classes/UnionFind

import { lowercaseCharToArrayIndex } from 'utils/char/lowercaseCharToArrayIndex'

// <Union Find>
// Time: O((n)α(m)), α() is the inverse Ackermann function
// Space: O(1)
//        n for the number of equations
//        m for the number of variables

function find(parents: number[], x: number): number {
    while (parents[x] !== x) {
        parents[x] = parents[parents[x]] // path compression
        x = parents[x]
    }

    return x
}

function union(parents: number[], x: number, y: number): void {
    parents[find(parents, x)] = find(parents, y)
}

function equationsPossible(equations: string[]): boolean {
    // edge cases
    if (!equations.length) {
        return false
    }

    const parents = Array.from({ length: 26 }, (_, i) => i)

    for (const equation of equations) {
        if (equation.charAt(1) === '=') {
            const indexX = lowercaseCharToArrayIndex(equation.charAt(0))
            const indexY = lowercaseCharToArrayIndex(equation.charAt(3))
            union(parents, indexX, indexY)
        }
    }

    for (const equation of equations) {
        if (equation.charAt(1) === '!') {
            const indexX = lowercaseCharToArrayIndex(equation.charAt(0))
            const indexY = lowercaseCharToArrayIndex(equation.charAt(3))

            if (find(parents, indexX) === find(parents, indexY)) {
                return false
            }
        }
    }

    return true
}

export { equationsPossible }
