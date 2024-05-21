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
    let [i, j] = [left, mid + 1]
    let p = 0
    let count = 0

    while (i <= mid && j <= right) {
        if (nums[indexes[i]] <= nums[indexes[j]]) {
            temp[p] = indexes[i]
            counts[indexes[i]] += count
            ++p
            ++i
        } else {
            temp[p] = indexes[j]
            ++p
            ++j
            count++
        }
    }

    while (i <= mid) {
        temp[p] = indexes[i]
        counts[indexes[i]] += count
        ++p
        ++i
    }

    while (j <= right) {
        temp[p] = indexes[j]
        ++p
        ++j
    }

    for (let k = 0; k < p; k++) {
        indexes[left + k] = temp[k]
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
