import { ListNode } from 'classes/SinglyLinkedListNode'

// <Recursion>
// Time: O(n + m)
// Space: O(n + m)

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    // edge cases
    if (!l1 || !l2) {
        return l1 ?? l2
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2)
        return l1
    }

    l2.next = mergeTwoLists(l1, l2.next)
    return l2
}

export { mergeTwoLists }
