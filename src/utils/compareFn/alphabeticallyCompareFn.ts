function compareFn(a: string, b: string): number {
    if (a === b) {
        return 0
    }

    return a < b ? -1 : 1
}

export { compareFn }
