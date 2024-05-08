// We can divide the array into two parts, and then find the majority element in each part
// If MajorLeft === MajorRight, then the majority element is MajorLeft
// Otherwise, the majority element is MajorLeft or MajorRight

// <Recursion, DivideAndConquer>
// Time: O(nlogn)
// Space: O(logn)

function countInRange(nums: number[], target: number, l: number, r: number): number {
    let count = 0

    for (let i = l; i <= r; ++i) {
        if (nums[i] === target) {
            ++count
        }
    }

    return count
}

// 1. divide and conquer
function majorityElementDnC(nums: number[], l: number, r: number): number {
    if (l === r) {
        return nums[l]
    }

    const mid = (l + r) >>> 1
    const left = majorityElementDnC(nums, l, mid)
    const right = majorityElementDnC(nums, mid + 1, r)

    if (left === right) {
        return left
    }

    const leftCount = countInRange(nums, left, l, r)
    const rightCount = countInRange(nums, right, l, r)

    return leftCount > rightCount ? left : right
}

function majorityElement(nums: number[]): number {
    // edge cases
    if (!nums.length) {
        return -1
    }

    return majorityElementDnC(nums, 0, nums.length - 1)
}

export { majorityElement }
