// <Stack>
// Time: O(n)
// Space: O(1), the input string is a valid parentheses string

function maxDepth(s: string): number {
    let ans = 0
    // 1. stack
    const stack: string[] = []

    // 2. traverse the string
    for (const char of s) {
        if (char === '(') {
            stack.push(char)
        } else if (char === ')') {
            // 3. update the answer which is the max depth
            ans = Math.max(ans, stack.length)
            stack.pop()
        }
    }

    return ans
}

export { maxDepth }
