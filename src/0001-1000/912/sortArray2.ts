// <Recursion, DivideAndConquer, Merge Sort>
// Time: O(nlogn)
// Space: O(n)

// 1. merge sort
function merge(nums: number[], temp: number[], left: number, mid: number, right: number): void {
    let [i, j] = [left, mid + 1]
    let p = 0

    while (i <= mid && j <= right) {
        if (nums[i] <= nums[j]) {
            temp[p] = nums[i]
            ++p
            ++i
        } else {
            temp[p] = nums[j]
            ++p
            ++j
        }
    }

    while (i <= mid) {
        temp[p] = nums[i]
        ++p
        ++i
    }

    while (j <= right) {
        temp[p] = nums[j]
        ++p
        ++j
    }

    for (let k = 0; k < p; ++k) {
        nums[left + k] = temp[k]
    }
}

function sort(nums: number[], temp: number[], left: number, right: number): void {
    if (left >= right) {
        return
    }

    const mid = (left + right) >>> 1

    sort(nums, temp, left, mid)
    sort(nums, temp, mid + 1, right)
    merge(nums, temp, left, mid, right)
}

function sortArray(nums: number[]): number[] {
    // edge cases
    if (!nums.length) {
        return nums
    }

    const temp: number[] = new Array(nums.length).fill(0)

    sort(nums, temp, 0, nums.length - 1)

    return nums
}

export { sortArray }
