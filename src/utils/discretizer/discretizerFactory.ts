function discretizerFactory<T>(arr: T[], comparator: (a: T, b: T) => number): Map<T, number> {
    return new Map(
        Array.from(new Set(arr))
            .sort(comparator)
            .map((n, i) => [n, i]),
    )
}

export { discretizerFactory }
