// <Brute Force>
// Time: O(nm)
// Space: O(1)

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const n = nums1.length
    const m = nums2.length

    // edge cases
    if (!n || !m) {
        return []
    }

    const ans: number[] = []

    for (let i = 0; i < n; ++i) {
        const target = nums1[i]
        const j = nums2.indexOf(target)
        const k = nums2.slice(j + 1).find((num) => num > target) ?? -1

        ans.push(k)
    }

    return ans
}

export { nextGreaterElement }
