class ListNode {
    val: number
    prev: ListNode | null
    next: ListNode | null

    constructor(val?: number, prev?: ListNode | null, next?: ListNode | null) {
        this.val = val ?? 0
        this.prev = prev ?? null
        this.next = next ?? null
    }
}

export { ListNode }
