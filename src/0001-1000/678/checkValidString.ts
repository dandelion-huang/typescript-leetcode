// <Stack>
// Time: O(n)
// Space: O(n)

function checkValidString(s: string): boolean {
    const n = s.length
    const parenthesesStack: number[] = []
    const asteriskStack: number[] = []

    // 1. traverse the string
    for (let i = 0; i < n; ++i) {
        const char = s[i]
        if (char === '(') {
            parenthesesStack.push(i)
        } else if (char === '*') {
            asteriskStack.push(i)
        } else if (parenthesesStack.length) {
            parenthesesStack.pop()
        } else if (asteriskStack.length) {
            asteriskStack.pop()
        } else {
            return false
        }
    }

    // 2. handle the rest elements in the two stacks
    while (parenthesesStack.length && asteriskStack.length) {
        const parenthesisIndex = parenthesesStack.pop()!
        const asteriskIndex = asteriskStack.pop()!

        // 3. the index of the asterisk can not be less than that of the left parenthesis
        if (parenthesisIndex > asteriskIndex) {
            return false
        }
    }

    // 4. all the left parenthesis should be paired
    return parenthesesStack.length === 0
}

export { checkValidString }
