// <Dynamic Programming, Monotonic Stack>
// Time: O(n)
// Space: O(n)

function sumSubarrayMins(arr: number[]): number {
    const n = arr.length

    // edge cases
    if (!n) {
        return 0
    }

    const stack: number[] = []
    const dp: number[] = []
    let ans = 0
    const MOD = 1e9 + 7

    for (let i = 0; i < n; ++i) {
        while (stack.length && arr[i] <= arr[stack[stack.length - 1]]) {
            stack.pop()
        }

        // k is the max length of the subarray containing the minimum
        // and the minimum is at the end of the subarray
        const k = !stack.length ? i + 1 : i - stack[stack.length - 1]

        dp.push(k * arr[i] + (!stack.length ? 0 : dp[i - k]))
        ans = (ans + dp[i]) % MOD
        stack.push(i)
    }

    return ans
}

export { sumSubarrayMins }
