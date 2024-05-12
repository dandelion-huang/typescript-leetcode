function lowbit(n: number): number {
    return n & -n
}

export { lowbit }
