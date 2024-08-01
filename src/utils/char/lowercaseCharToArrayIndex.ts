function lowercaseCharToArrayIndex(char: string): number {
    if (char.length !== 1) {
        throw new Error('length must be 1')
    }

    if (char < 'a' || char > 'z') {
        throw new Error('invalid char')
    }

    return char.charCodeAt(0) - 97
}

export { lowercaseCharToArrayIndex }
