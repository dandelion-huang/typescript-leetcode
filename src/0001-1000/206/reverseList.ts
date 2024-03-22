import { ListNode } from 'utils/SinglyLinkedListNode'

function reverseList(head: ListNode | null): ListNode | null {
    // 1. define a prev to store the previous node
    let prev = null

    // 2. iterate through the linked list
    while (head !== null) {
        ;[head.next, prev, head] = [prev, head, head.next]
    }

    return prev
}

export { reverseList }
