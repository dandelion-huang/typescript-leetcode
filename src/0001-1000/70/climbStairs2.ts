// Notice that it's a Fibonacci sequence

// <Math, Binary Exponentiation>
// Time: O(logn)
// Space: O(1)

function multiply(a: number[][], b: number[][]): number[][] {
    const res = [
        [0, 0],
        [0, 0],
    ]

    for (let i = 0; i < 2; ++i) {
        for (let j = 0; j < 2; ++j) {
            res[i][j] = a[i][0] * b[0][j] + a[i][1] * b[1][j]
        }
    }

    return res
}

function power(a: number[][], n: number): number[][] {
    let res = [
        [1, 0],
        [0, 1],
    ]

    while (n > 0) {
        // examine if n is odd
        if ((n & 1) === 1) {
            res = multiply(res, a)
        }

        // n = n >> 1
        n >>= 1
        a = multiply(a, a)
    }

    return res
}

function climbStairs(n: number): number {
    const m = [
        [1, 1],
        [1, 0],
    ]

    const ans = power(m, n)

    return ans[0][0]
}

export { climbStairs }
