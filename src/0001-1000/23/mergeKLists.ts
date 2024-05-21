import { ListNode } from 'classes/SinglyLinkedListNode'
import { mergeTwoLists } from '0001-1000/21/mergeTwoLists2'

// <Recursion, DivideAndConquer>
// Time: O(knlogk), k is the number of lists
// Space: O(logk)

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
