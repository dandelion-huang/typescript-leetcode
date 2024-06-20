import { ListNode } from 'classes/SinglyLinkedListNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

type Helper = { front: ListNode | null }

function recurse(node: ListNode | null, helper: Helper): boolean {
    if (node) {
        if (!recurse(node.next, helper)) {
            return false
        }

        if (helper.front!.val !== node.val) {
            return false
        }

        helper.front = helper.front!.next
    }

    return true
}

function isPalindrome(head: ListNode | null): boolean {
    // edge cases
    if (!head?.next) {
        return true
    }

    const helper: Helper = { front: head }

    return recurse(head, helper)
}

export { isPalindrome }
