import { Digit, phoneNumberLetters } from 'constants/phoneNumberLetters'

// <Recursion, Backtracking>
// Time: O(3^n * 4^m)
// Space: O(n + m)
//        n for the number corresponding to 3 letters (2, 3, 4, 5, 6, 8)
//        m for the number corresponding to 4 letters (7, 9)

// 1. backtracking
function backtrack(digits: string, combinations: string[], combination: string, index: number) {
    if (index === digits.length) {
        combinations.push(combination)
        return
    }

    const digit = digits[index] as unknown as Digit
    const letters = phoneNumberLetters[digit]

    for (const char of letters) {
        combination += char
        backtrack(digits, combinations, combination, index + 1)
        combination = combination.slice(0, -1)
    }
}

function letterCombinations(digits: string): string[] {
    // edge cases
    if (!digits.length) {
        return []
    }

    const combinations: string[] = []

    backtrack(digits, combinations, '', 0)

    return combinations
}

export { letterCombinations }
