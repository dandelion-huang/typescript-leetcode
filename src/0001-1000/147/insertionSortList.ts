import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, Insertion Sort>
// Time: O(n^2)
// Space: O(1)

function iterate(listNode: ListNode): ListNode | null {
    const dummyHead = new ListNode(-Infinity, listNode)
    let lastSorted = listNode
    let cur = listNode.next

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

function insertionSortList(head: ListNode | null): ListNode | null {
    // edge cases
    if (!head) {
        return head
    }

    return iterate(head)
}

export { insertionSortList }
