function numToLowercaseChar(num: number): string {
    if (num < 0 || num > 25) {
        throw new Error('invalid number')
    }

    return String.fromCharCode(97 + num) // Unicode of 'a': 97
}

export { numToLowercaseChar }
