// <Binary Search>
// Time: O(logn)
// Space: O(1)

function findMin(nums: number[]): number {
    // edge cases
    if (!nums.length) {
        return NaN
    }

    let left = 0
    let right = nums.length - 1
    let mid = 0

    while (left <= right) {
        mid = (left + right) >>> 1

        if (nums[mid] < nums[right]) {
            right = mid
        } else {
            left = mid + 1
        }
    }

    return nums[mid]
}

export { findMin }
