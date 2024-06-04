// <Greedy>
// Time: O(n)
// Space: O(1)

function checkValidString(s: string): boolean {
    // only three conditions, considering the min and max of the unpaired
    // 1. if the char is '(', the min and max plus one
    // 2. if the char is ')', the min and max minus one
    // 3. if the char is '*', the min minus one and the max plus one

    // notice that the number of the unpaired can not be negative
    // so the max can not be negative and the min should be at least 0

    let maxCount = 0
    let minCount = 0

    for (const char of s) {
        if (char === '(') {
            ++minCount
            ++maxCount
        } else if (char === ')') {
            if (maxCount === 0) {
                return false
            }

            minCount = Math.max(0, --minCount)
            --maxCount
        } else if (char === '*') {
            minCount = Math.max(0, --minCount)
            ++maxCount
        }
    }

    // 4. all the left parenthesis should be paired
    return minCount === 0
}

export { checkValidString }
