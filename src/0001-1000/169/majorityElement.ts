// <Iteration, Sorting>
// Time: O(nlogn)
// Space: O(logn)

function majorityElement(nums: number[]): number {
    // edge cases
    if (!nums.length) {
        return -1
    }

    nums.sort((a, b) => a - b)

    return nums[Math.floor(nums.length / 2)]
}

export { majorityElement }
