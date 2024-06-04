// <Sliding Window>
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
    let start = 0
    let end = -1

    // 2. traverse the array and update the answer
    while (end < n) {
        while (prod < k) {
            ++end
            ans += end - start
            prod *= nums[end]
        }

        while (prod >= k) {
            prod /= nums[start]
            ++start
        }
    }

    return ans
}

export { numSubarrayProductLessThanK }
