// <Sliding Window>
// Time: O(n)
// Space: O(n)

function maxSubarrayLength(nums: number[], k: number): number {
    const n = nums.length

    // edge cases
    if (n === 0) {
        return 0
    }

    let ans = 0

    // 1. sliding window
    let [start, end] = [0, 0]

    // 2. memoize the frequency of each number
    const freq = new Map<number, number>()

    // 3. traverse the array and update the answer
    while (end < n) {
        freq.set(nums[end], (freq.get(nums[end]) ?? 0) + 1)

        if (freq.get(nums[end])! <= k) {
            ans = Math.max(ans, end - start + 1)
        }

        while (freq.get(nums[end])! > k) {
            freq.set(nums[start], freq.get(nums[start])! - 1)
            ++start
        }

        ++end
    }

    return ans
}

export { maxSubarrayLength }
