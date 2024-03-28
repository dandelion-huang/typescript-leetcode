// Time: O(n)
// Space: O(1)

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    const n = nums.length

    // edge cases
    if (k <= 1 || n === 0) {
        return 0
    }

    let ans = 0
    let prod = 1

    // 1. sliding window
    let [start, end] = [0, 0]

    // 2. traverse the array and update the answer
    while (end < n) {
        prod *= nums[end]

        while (prod >= k && start < end) {
            prod /= nums[start]
            ++start
        }

        if (prod < k) {
            ans += end - start + 1
        }

        ++end
    }

    return ans
}

export { numSubarrayProductLessThanK }
