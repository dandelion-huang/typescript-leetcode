function swap<T>(arr: T[], i: number, j: number) {
    ;[arr[i], arr[j]] = [arr[j], arr[i]]
}

export { swap }
