import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, Fast-slow Pointers>
// Time: O(n)
// Space: O(1)

function detectCycle(head: ListNode | null): ListNode | null {
    // edge cases
    if (!head?.next) {
        return null
    }

    let slow: ListNode | null = head
    let fast: ListNode | null = head

    while (fast) {
        if (!fast.next) {
            return null
        }

        slow = slow!.next
        fast = fast.next.next

        if (slow === fast) {
            let ptr = head

            while (ptr !== slow) {
                ptr = ptr.next!
                slow = slow!.next
            }

            return ptr
        }
    }

    return null // nerver reach here
}

export { detectCycle }
