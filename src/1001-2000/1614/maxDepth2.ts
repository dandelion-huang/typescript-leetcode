// The constaint says that the string is a valid parentheses string
// but we can try to examine if it is a valid parentheses string
// if the string is not a valid parentheses string, the function should return -1

// Time: O(n)
// Space: O(1)

function maxDepth(s: string): number {
    let ans = 0
    const stack: string[] = []

    // 1. traverse the string
    for (const char of s) {
        if (char === '(') {
            stack.unshift(char)
        } else if (char === ')') {
            // 2. update the answer which is the max depth
            ans = Math.max(ans, stack.length)

            if (stack.length > 0) {
                stack.shift()
            }
        }
    }

    // 3. if the stack is not empty, the s is not a valid parentheses string (denote VPS)
    if (stack.length > 0) {
        return -1
    }

    return ans
}

export { maxDepth }
