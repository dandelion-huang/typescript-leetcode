// To avoid multi counting, we assume:
//      1. the number of subarrays which the minimum is at the beginning, called left[i]
//      2. the number of subarrays which the minimum is at the end, called right[i]
// then, the number of subarrays containing the minimum is left[i] * right[i]
// so the answer is the sum of all the arr[i] * left[i] * right[i]

// <Monotonic Stack>
// Time: O(n)
// Space: O(n)

function sumSubarrayMins(arr: number[]): number {
    const n = arr.length

    // edge cases
    if (!n) {
        return 0
    }

    let stack: number[] = []
    const left: number[] = []
    const right: number[] = []

    for (let i = 0; i < n; ++i) {
        // left can be smaller or equal to the current element
        while (stack.length && arr[i] <= arr[stack[stack.length - 1]]) {
            stack.pop()
        }

        left.push(i - (!stack.length ? -1 : stack[stack.length - 1]))
        stack.push(i)
    }

    stack = []

    for (let i = n - 1; i >= 0; --i) {
        // right can only be smaller than the current element
        while (stack.length && arr[i] < arr[stack[stack.length - 1]]) {
            stack.pop()
        }

        right.unshift((!stack.length ? n : stack[stack.length - 1]) - i)
        stack.push(i)
    }

    let ans = 0
    const MOD = 1e9 + 7

    for (let i = 0; i < n; ++i) {
        ans = (ans + arr[i] * left[i] * right[i]) % MOD
    }

    return ans
}

export { sumSubarrayMins }
