import { ListNode } from 'classes/SinglyLinkedListNode'

// <Recursion>
// Time: O(n)
// Space: O(n)

function isPalindrome(head: ListNode | null): boolean {
    // edge cases
    if (!head?.next) {
        return true
    }

    let front: ListNode | null = head

    //
    function recursion(node: ListNode | null): boolean {
        if (node) {
            if (!recursion(node.next)) {
                return false
            }

            if (front!.val !== node.val) {
                return false
            }

            front = front!.next
        }

        return true
    }

    return recursion(head)
}

export { isPalindrome }
