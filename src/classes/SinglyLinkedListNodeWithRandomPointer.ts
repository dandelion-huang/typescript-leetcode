import { ListNode as SinglyLinkedListNode } from 'classes/SinglyLinkedListNode'

class ListNode extends SinglyLinkedListNode {
    declare val: number
    declare next: ListNode | null
    random: ListNode | null
    constructor(val?: number, next?: ListNode | null, random?: ListNode | null) {
        super()
        this.val = val ?? 0
        this.next = next ?? null
        this.random = random ?? null
    }
}

export { ListNode }
