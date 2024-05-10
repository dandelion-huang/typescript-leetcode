// <Binary Search, DivideAndConquer>
// Time: O(nlogn)
// Space: O(logn)

function findMinDnC(nums: number[], l: number, r: number): number {
    if (l === r) {
        return nums[l]
    }

    const mid = (l + r) >>> 1
    const left = findMinDnC(nums, l, mid)
    const right = findMinDnC(nums, mid + 1, r)

    if (left === right) {
        --r
    }

    return Math.min(left, right)
}

function findMin(nums: number[]): number {
    // edge cases
    if (!nums.length) {
        return NaN
    }

    return findMinDnC(nums, 0, nums.length - 1)
}

export { findMin }
