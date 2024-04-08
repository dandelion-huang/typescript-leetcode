import { ListNode } from 'utils/SinglyLinkedListNode'

// <Recursion>
// Time: O(n)
// Space: O(1)

function reverseList(head: ListNode | null): ListNode | null {
    // edge cases
    if (!head?.next) {
        return head
    }

    // recursion
    const newHead = reverseList(head.next)

    // update the next of the head
    head.next.next = head
    // break the cycle
    head.next = null

    return newHead
}

export { reverseList }
