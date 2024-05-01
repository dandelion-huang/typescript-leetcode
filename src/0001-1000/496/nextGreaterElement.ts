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
        let j = 0

        while (j < m && nums2[j] !== target) {
            ++j
        }

        let k = j + 1

        while (k < m && nums2[k] < target) {
            ++k
        }

        ans.push(k < m ? nums2[k] : -1)
    }

    return ans
}

export { nextGreaterElement }
