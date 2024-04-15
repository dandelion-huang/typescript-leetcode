// <Sliding Window>
// Time: O(n)
// Space: O(1)

function numSubarrayProductLessThanK(nums: number[], k: number): number {
    const n = nums.length

    // edge cases
    if (k <= 1 || n === 0) {
        return 0
    }

    let ans = nums[0] < k ? 1 : 0
    let prod = nums[0]

    // 1. sliding window
    let [start, end] = [0, 1]

    // 2. traverse the array and update the answer
    while (end < n) {
        if (nums[end] < k) {
            ++ans
        }

        prod *= nums[end]

        while (prod >= k && start < end) {
            prod /= nums[start]
            ++start
        }

        ans += end - start
        ++end
    }

    return ans
}

export { numSubarrayProductLessThanK }
