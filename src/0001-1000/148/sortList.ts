import { ListNode } from 'classes/SinglyLinkedListNode'
import { mergeTwoLists } from '0001-1000/21/mergeTwoLists2'

// <Recursion, DivideAndConquer, Merge Sort>
// Time: O(nlogn)
// Space: O(logn)

function partition(head: ListNode | null, tail: ListNode | null): ListNode | null {
    if (!head) {
        return head
    }

    if (head.next === tail) {
        head.next = null

        return head
    }

    let [slow, fast]: Array<ListNode | null> = [head, head]

    while (fast !== tail) {
        slow = slow!.next
        fast = fast!.next

        if (fast !== tail) {
            fast = fast!.next
        }
    }

    const mid = slow

    return mergeTwoLists(partition(head, mid), partition(mid, tail))
}

function sortList(head: ListNode | null): ListNode | null {
    return partition(head, null)
}

export { sortList }
