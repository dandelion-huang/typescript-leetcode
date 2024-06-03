import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration>
// Time: O(n)
// Space: O(1)

function swapPairs(head: ListNode | null): ListNode | null {
    const dummyHead = new ListNode(-1, head)

    let prev = dummyHead

    while (prev.next?.next) {
        const node1: ListNode | null = prev.next
        const node2: ListNode | null = prev.next.next

        ;[prev.next, node1.next, node2.next] = [node2, node2.next, node1]

        prev = node1
    }

    return dummyHead.next
}

export { swapPairs }
