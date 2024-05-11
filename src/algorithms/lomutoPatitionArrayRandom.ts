import { swap } from 'utils/swapArrayElements'

// In Lomuto Partition Scheme
// the pivot is chosen as the last element

function partition(nums: number[], left: number, right: number): number {
    const pivot = left + Math.floor(Math.random() * (right - left + 1))

    swap(nums, pivot, right)

    let i = left

    for (let j = left; j < right; ++j) {
        if (nums[j] < nums[right]) {
            swap(nums, i, j)
            ++i
        }
    }

    swap(nums, i, right)

    return i
}

export { partition }
