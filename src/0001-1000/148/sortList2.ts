import { ListNode } from 'classes/SinglyLinkedListNode'
import { mergeTwoLists } from '0001-1000/21/mergeTwoLists2'

// <Bottom-up Iteration, Merge Sort>
// Time: O(nlogn)
// Space: O(1)

// move pointer in length-segmented linked-list or to the tail
function movePointer(listNode: ListNode | null, segmentLength: number): ListNode | null {
    for (let i = 1; i < segmentLength && listNode?.next; ++i) {
        listNode = listNode.next
    }

    return listNode
}

function iterate(listNode: ListNode | null, length: number): ListNode | null {
    const dummyHead = new ListNode(-Infinity, listNode)

    for (let subLength = 1; subLength < length; subLength <<= 1) {
        let prev: ListNode | null = dummyHead
        let cur: ListNode | null = dummyHead.next

        while (cur) {
            const head1 = cur

            cur = movePointer(cur, subLength)

            const head2: ListNode | null = cur!.next

            cur!.next = null // break the linked-list
            cur = head2
            cur = movePointer(cur, subLength)

            let next: ListNode | null = null

            if (cur) {
                next = cur.next
                cur.next = null // break the linked-list
            }

            const mergedHead = mergeTwoLists(head1, head2)

            prev!.next = mergedHead
            prev = movePointer(prev, Infinity) // move pointer to the tail
            cur = next
        }
    }

    return dummyHead.next
}

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

    return iterate(head, length)
}

export { sortList }
