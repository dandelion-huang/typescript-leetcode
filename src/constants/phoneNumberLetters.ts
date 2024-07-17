// ref: https://assets.leetcode.com/uploads/2022/03/15/1200px-telephone-keypad2svg.png
export const phoneNumberLetters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
} as const

export type Digit = keyof typeof phoneNumberLetters
