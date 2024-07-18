import { partition } from 'algorithms/hoarePatitionArray'

// In Quick Sort, we chose a pivot element
// and partition the array into two subarrays
// all the elements smaller than the pivot will be on the left
// all the elements greater than the pivot will be on the right

// *Lomuto Partition Scheme can't pass the test cases (Time Limit Exceeded)
// <Recursion, DivideAndConquer, Quick Sort>
// Time: O(nlogn)
// Space: O(n)

// 1. quick sort
function quickSort(nums: number[], left: number, right: number) {
    if (left >= right) {
        return
    }

    const [p, q] = partition(nums, left, right)

    quickSort(nums, left, p)
    quickSort(nums, q, right)
}

function sortArray(nums: number[]): number[] {
    // edge cases
    if (!nums.length) {
        return nums
    }

    quickSort(nums, 0, nums.length - 1)

    return nums
}

export { sortArray }
