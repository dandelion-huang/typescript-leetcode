import { swap } from 'utils/swap/swapArrayElements'

// In Hoare Partition Scheme
// the pivot is chosen as the mid

function partition(nums: number[], left: number, right: number): [number, number] {
    // in Hoare Partition Scheme, the pivot-indexed element might be swapped
    const pivotIndex = (left + right) >>> 1
    const pivot = nums[pivotIndex]
    let i = left
    let j = right

    while (i <= j) {
        while (nums[i] < pivot) {
            ++i
        }

        while (nums[j] > pivot) {
            --j
        }

        if (i <= j) {
            swap(nums, i, j)
            ++i
            --j
        }
    }

    return [j, i]
}

export { partition }
