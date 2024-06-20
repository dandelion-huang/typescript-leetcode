import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration>
// Time: O(n + m)
// Space: O(1)

function iterate(l1: ListNode, l2: ListNode): ListNode | null {
    const dummyHead = new ListNode(-1)
    let tail = dummyHead
    let ptr1: ListNode | null = l1
    let ptr2: ListNode | null = l2

    while (ptr1 && ptr2) {
        if (ptr1.val < ptr2.val) {
            tail.next = ptr1
            ptr1 = ptr1.next
        } else {
            tail.next = ptr2
            ptr2 = ptr2.next
        }

        tail = tail.next
    }

    tail.next = ptr1 ?? ptr2

    return dummyHead.next
}

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // edge cases
    if (!l1 || !l2) {
        return l1 ?? l2
    }

    return iterate(l1, l2)
}

export { mergeTwoLists }
