import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, Fast-slow Pointers>
// Time: O(n)
// Space: O(1)

function iterate(listNode: ListNode): boolean {
    let slow: ListNode | null = listNode
    let fast: ListNode | null = listNode.next

    while (slow !== fast) {
        if (!fast?.next) {
            return false
        }

        slow = slow!.next
        fast = fast.next.next
    }

    return true
}

function hasCycle(head: ListNode | null): boolean {
    // edge cases
    if (!head?.next) {
        return false
    }

    return iterate(head)
}

export { hasCycle }
