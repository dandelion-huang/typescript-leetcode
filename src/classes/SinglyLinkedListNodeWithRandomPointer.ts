import { ListNode as SinglyLinkedListNode } from 'classes/SinglyLinkedListNode'

class ListNode extends SinglyLinkedListNode {
    random: ListNode | null

    constructor(val?: number, next?: ListNode | null, random?: ListNode | null) {
        super(val, next)
        this.random = random ?? null
    }
}

export { ListNode }
