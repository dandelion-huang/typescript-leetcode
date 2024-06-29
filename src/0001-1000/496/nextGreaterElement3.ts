// <HashTable, Monotonic Stack>
// Time: O(m)
// Space: O(m)

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const n = nums1.length
    const m = nums2.length

    // edge cases
    if (!n || !m) {
        return []
    }

    const stack: number[] = []
    const map = new Map<number, number>() // Map<num, nextGreater>

    for (let i = m - 1; i >= 0; --i) {
        const num = nums2[i]

        while (stack.length && num >= stack[stack.length - 1]) {
            stack.pop()
        }

        map.set(num, stack[stack.length - 1] ?? -1)
        stack.push(num)
    }

    const ans = Array.from({ length: n }, (_, i) => map.get(nums1[i])!)

    return ans
}

export { nextGreaterElement }
