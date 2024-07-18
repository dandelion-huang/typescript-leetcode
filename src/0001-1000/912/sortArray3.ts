// <Recursion, DivideAndConquer, Merge Sort>
// Time: O(nlogn)
// Space: O(n)

// 1. merge sort
function merge(nums: number[], temp: number[], left: number, mid: number, right: number) {
    for (let i = left; i <= right; ++i) {
        temp[i] = nums[i]
    }

    let i = left
    let j = mid + 1

    for (let p = left; p <= right; ++p) {
        if (i === mid + 1) {
            nums[p] = temp[j]
            ++j
            continue
        }

        if (j === right + 1) {
            nums[p] = temp[i]
            ++i
            continue
        }

        if (temp[i] > temp[j]) {
            nums[p] = temp[j]
            ++j
        } else {
            nums[p] = temp[i]
            ++i
        }
    }
}

function sort(nums: number[], temp: number[], left: number, right: number) {
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
