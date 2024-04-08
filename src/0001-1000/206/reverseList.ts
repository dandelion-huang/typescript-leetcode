import { ListNode } from 'utils/SinglyLinkedListNode'

// <Iteration>
// Time: O(n)
// Space: O(1)

function reverseList(head: ListNode | null): ListNode | null {
    // edge cases
    if (!head?.next) {
        return head
    }

    // 1. define a prev to store the previous node
    let prev: ListNode | null = null

    // 2. iterate through the linked list
    while (head !== null) {
        ;[head.next, prev, head] = [prev, head, head.next]
    }

    return prev
}

export { reverseList }
