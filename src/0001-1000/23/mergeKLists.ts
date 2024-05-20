import { ListNode } from 'classes/SinglyLinkedListNode'

// <Recursion, DivideAndConquer>
// Time: O(knlogk), k is the number of lists
// Space: O(logk)

function mergeTwoLists(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (!l1 || !l2) {
        return l1 ?? l2
    }

    const dummyHead = new ListNode(-1)
    let tail = dummyHead
    let [ptr1, ptr2]: Array<ListNode | null> = [l1, l2]

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

// 1. divide and conquer
function merge(lists: Array<ListNode | null>, left: number, right: number): ListNode | null {
    if (left > right) {
        return null
    }

    if (left === right) {
        return lists[left]
    }

    const mid = (left + right) >>> 1

    return mergeTwoLists(merge(lists, left, mid), merge(lists, mid + 1, right))
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    return merge(lists, 0, lists.length - 1)
}

export { mergeKLists }
