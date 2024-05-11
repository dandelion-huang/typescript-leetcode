function swap<T>(arr: T[], i: number, j: number): void {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

export { swap }
