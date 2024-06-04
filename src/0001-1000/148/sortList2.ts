import { ListNode } from 'classes/SinglyLinkedListNode'
import { mergeTwoLists } from '0001-1000/21/mergeTwoLists2'

// <Bottom-up Iteration, Merge Sort>
// Time: O(nlogn)
// Space: O(1)

function sortList(head: ListNode | null): ListNode | null {
    // edge cases
    if (!head?.next) {
        return head
    }

    let length = 0
    let node: ListNode | null = head

    while (node) {
        ++length
        node = node.next
    }

    const dummyHead = new ListNode(-Infinity, head)

    for (let subLength = 1; subLength < length; subLength <<= 1) {
        let prev: ListNode | null = dummyHead
        let cur: ListNode | null = dummyHead.next

        while (cur) {
            const head1 = cur

            for (let i = 1; i < subLength && cur.next; ++i) {
                cur = cur.next
            }

            const head2: ListNode | null = cur.next

            cur.next = null // break the linked-list
            cur = head2

            for (let i = 1; i < subLength && cur?.next; ++i) {
                cur = cur?.next
            }

            let next: ListNode | null = null

            if (cur) {
                next = cur.next
                cur.next = null // break the linked-list
            }

            const mergedHead = mergeTwoLists(head1, head2)

            prev!.next = mergedHead

            while (prev!.next) {
                prev = prev!.next
            }

            cur = next
        }
    }

    return dummyHead.next
}

export { sortList }
