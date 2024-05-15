import { ListNode } from 'classes/SinglyLinkedListNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head
    }

    const newHead = head.next
    head.next = swapPairs(newHead.next)
    newHead.next = head

    return newHead
}

export { swapPairs }
