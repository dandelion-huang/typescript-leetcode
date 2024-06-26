// <Iteration, HashTable>
// Time: O(n)
// Space: O(n)

function iterate(nums: number[]): number {
    const map = new Map<number, number>() // Map<num, count>

    for (const num of nums) {
        map.set(num, (map.get(num) ?? 0) + 1)
        if (map.get(num)! > nums.length / 2) {
            return num
        }
    }

    return -1 // never reach here
}

function majorityElement(nums: number[]): number {
    // edge cases
    if (!nums.length) {
        return -1
    }

    return iterate(nums)
}

export { majorityElement }
