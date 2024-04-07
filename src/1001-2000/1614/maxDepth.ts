// <Iteration>
// Time: O(n)
// Space: O(1)

function maxDepth(s: string): number {
    let ans = 0
    let depth = 0

    // 1. traverse the string
    for (const char of s) {
        if (char === '(') {
            ++depth
            // 2. update the answer which is the max depth
            ans = Math.max(ans, depth)
        } else if (char === ')') {
            --depth
        }
    }

    return ans
}

export { maxDepth }
