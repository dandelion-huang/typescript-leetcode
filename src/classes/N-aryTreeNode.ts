class Node {
    val: number
    children: Node[]
    constructor(val?: number) {
        this.val = val ?? 0
        this.children = []
    }
}

export { Node }
