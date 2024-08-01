import { swap } from 'utils/swap/swapArrayElements'

// In Lomuto Partition Scheme
// the pivot is chosen as the last element

function partition(nums: number[], left: number, right: number): number {
    const pivot = nums[right]

    // used to memorize the index of the element to be swapped
    let i = left

    for (let j = left; j < right; ++j) {
        if (nums[j] < nums[pivot]) {
            swap(nums, i, j)
            ++i
        }
    }

    swap(nums, i, right)

    return i
}

export { partition }
