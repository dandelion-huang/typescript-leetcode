import { MinPriorityQueue } from '@datastructures-js/priority-queue' // Leetcode
import { ListNode } from 'classes/SinglyLinkedListNode'

// <Priority Queue>
// Time: O(knlogk), k is the number of lists
// Space: O(k)

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
    const pq = new MinPriorityQueue({ priority: (node: ListNode) => node.val })

    for (const head of lists) {
        if (head) {
            pq.enqueue(head)
        }
    }

    const dummyHead = new ListNode(-1)
    let cur = dummyHead

    while (!pq.isEmpty()) {
        const node = pq.dequeue().element

        if (node.next) {
            pq.enqueue(node.next)
        }

        cur.next = node
        cur = cur.next
    }

    return dummyHead.next
}

export { mergeKLists }
