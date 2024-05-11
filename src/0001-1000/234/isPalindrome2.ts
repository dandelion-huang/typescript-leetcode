import { ListNode } from 'classes/SinglyLinkedListNode'

// <Two Pointers>
// Time: O(n)
// Space: O(n)

function isPalindrome(head: ListNode | null): boolean {
    // edge cases
    if (!head?.next) {
        return true
    }

    // 1. copy every nodes in an array
    const values: number[] = []

    while (head) {
        values.push(head.val)
        head = head.next
    }

    // 2. two pointers
    for (let i = 0, j = values.length - 1; i < j; ++i, --j) {
        if (values[i] !== values[j]) {
            return false
        }
    }

    return true
}

export { isPalindrome }
