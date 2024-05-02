// <Monotonic Stack>
// Time: O(m)
// Space: O(m)

function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
    const n = nums1.length
    const m = nums2.length

    // edge cases
    if (!n || !m) {
        return []
    }

    const nextGreater: number[] = []
    const stack: number[][] = []

    for (let i = 0; i < m; ++i) {
        const num = nums2[i]
        nextGreater.push(-1)

        while (stack.length && num > stack[stack.length - 1][1]) {
            nextGreater[stack.pop()![0]] = num
        }

        stack.push([i, num])
    }

    const ans: number[] = []

    for (let i = 0; i < n; ++i) {
        ans.push(nextGreater[nums2.indexOf(nums1[i])])
    }

    return ans
}

export { nextGreaterElement }
