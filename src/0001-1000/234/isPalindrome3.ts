import { ListNode } from 'classes/SinglyLinkedListNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function recurse(node: ListNode | null): boolean {
    let front: ListNode | null = node

    if (node) {
        if (!recurse(node.next)) {
            return false
        }

        if (front!.val !== node.val) {
            return false
        }

        front = front!.next
    }

    return true
}

function isPalindrome(head: ListNode | null): boolean {
    // edge cases
    if (!head?.next) {
        return true
    }

    return recurse(head)
}

export { isPalindrome }
