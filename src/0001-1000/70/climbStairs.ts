// Notice that it's a Fibonacci sequence

// <Dynamic Programming>
// Time: O(n)
// Space: O(1)

function climbStairs(n: number): number {
    let [p, q, r] = [0, 0, 1]

    for (let i = 1; i <= n; ++i) {
        ;[p, q] = [q, r]
        r = p + q
    }

    return r
}

export { climbStairs }
