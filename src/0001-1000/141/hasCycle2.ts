import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, Fast-slow Pointers>
// Time: O(n)
// Space: O(1)

function hasCycle(head: ListNode | null): boolean {
    // edge cases
    if (!head?.next) {
        return false
    }

    let slow: ListNode | null = head
    let fast: ListNode | null = head.next

    while (slow !== fast) {
        if (!fast?.next) {
            return false
        }

        slow = slow!.next
        fast = fast.next.next
    }

    return true
}

export { hasCycle }
