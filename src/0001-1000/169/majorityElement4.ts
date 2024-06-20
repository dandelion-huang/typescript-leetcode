// <Boyer-Moore>
// 1. If we mark the majority element as 1, then the other elements as -1
//    the sum of the elements must be positive
// 2. No matter how many times the sum === 0 temporarily, the sum will be positive eventually
// 3. We update candidate to the new majority element every time the sum === 0,
//    and then it will be the majority element

// <Iteration, Boyer-Moore>
// Time: O(n)
// Space: O(1)

function iterate(nums: number[]): number {
    let count = 0
    let candidate: number | null = null

    for (const num of nums) {
        if (count === 0) {
            candidate = num
        }

        count += num === candidate ? 1 : -1
    }

    return candidate!
}

function majorityElement(nums: number[]): number {
    // edge cases
    if (!nums.length) {
        return -1
    }

    return iterate(nums)
}

export { majorityElement }
