import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, Insertion Sort>
// Time: O(n^2)
// Space: O(1)

function insertionSortList(head: ListNode | null): ListNode | null {
    // edge case
    if (!head) {
        return null
    }

    const dummyHead = new ListNode(-Infinity)

    dummyHead.next = head

    let lastSorted = head
    let cur = head.next

    while (cur) {
        if (cur.val >= lastSorted.val) {
            lastSorted = lastSorted.next!
        } else {
            let prev = dummyHead

            while (prev.next!.val <= cur.val) {
                prev = prev.next!
            }

            ;[lastSorted.next, cur.next, prev.next] = [cur.next, prev.next, cur]
        }

        cur = lastSorted.next
    }

    return dummyHead.next
}

export { insertionSortList }
