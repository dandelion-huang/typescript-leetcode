import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, Fast-slow Pointers>
// Time: O(n)
// Space: O(1)

function iterate(listNode: ListNode): ListNode | null {
    let slow: ListNode | null = listNode
    let fast: ListNode | null = listNode

    while (fast) {
        if (!fast.next) {
            return null
        }

        slow = slow!.next
        fast = fast.next.next

        if (slow === fast) {
            let ptr = listNode

            while (ptr !== slow) {
                ptr = ptr.next!
                slow = slow!.next
            }

            return ptr
        }
    }

    return null // nerver reach here
}

function detectCycle(head: ListNode | null): ListNode | null {
    // edge cases
    if (!head?.next) {
        return null
    }

    return iterate(head)
}

export { detectCycle }
