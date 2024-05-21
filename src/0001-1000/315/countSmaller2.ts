// <Recursion, DivideAndConquer, Merge Sort>
// Time: O(nlogn)
// Space: O(n)

// 1. merge sort
function merge(
    nums: number[],
    indexes: number[],
    temp: number[],
    counts: number[],
    left: number,
    mid: number,
    right: number,
): void {
    for (let i = left; i <= right; ++i) {
        temp[i] = indexes[i]
    }

    let [i, j] = [left, mid + 1]
    let count = 0

    for (let p = left; p <= right; ++p) {
        if (i === mid + 1) {
            indexes[p] = temp[j]
            ++j
            // } else if (j === right + 1) {
            //     indexes[p] = temp[i]
            //     counts[temp[i]] += count
            //     ++i
        } else if (nums[temp[i]] > nums[temp[j]]) {
            indexes[p] = temp[j]
            ++j
            ++count
        } else {
            indexes[p] = temp[i]
            counts[temp[i]] += count
            ++i
        }
    }
}

function sort(
    nums: number[],
    indexes: number[],
    temp: number[],
    counts: number[],
    left: number,
    right: number,
): void {
    if (left >= right) {
        return
    }

    const mid = (left + right) >>> 1

    sort(nums, indexes, temp, counts, left, mid)
    sort(nums, indexes, temp, counts, mid + 1, right)
    merge(nums, indexes, temp, counts, left, mid, right)
}

function countSmaller(nums: number[]): number[] {
    const indexes = nums.map((_, index) => index)
    const temp: number[] = new Array(nums.length)
    const counts: number[] = new Array(nums.length).fill(0)

    sort(nums, indexes, temp, counts, 0, nums.length - 1)

    return counts
}

export { countSmaller }
