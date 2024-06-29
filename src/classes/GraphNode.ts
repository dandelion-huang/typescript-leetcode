class Node {
    val: number
    neighbors: Node[]

    constructor(val?: number, neighbors?: Node[]) {
        this.val = val ?? 0
        this.neighbors = neighbors ?? []
    }
}

export { Node }
