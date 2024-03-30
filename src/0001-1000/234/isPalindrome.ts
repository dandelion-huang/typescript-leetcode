import { ListNode } from 'utils/SinglyLinkedListNode'
import { reverseList } from '0001-1000/206/reverseList'

// Time: O(n)
// Space: O(1)

function isPalindrome(head: ListNode | null): boolean {
    // edge cases
    if (head === null || head.next === null) {
        return true
    }

    // 1. fast-slow pointers
    let [slow, fast]: Array<ListNode | null> = [head, head]

    // 2. traverse the list to find the middle node
    while (fast !== null && fast.next !== null) {
        slow = slow.next!
        fast = fast.next.next
    }

    // 3. reverse the second half of the list and compare val between them
    //    note that we didn't split the prev middle node and the middle node
    //    so the last node of the fist half of the list will be the middle node
    let revHead = reverseList(slow)

    while (revHead !== null) {
        if (head!.val !== revHead.val) {
            return false
        }
        head = head!.next
        revHead = revHead.next
    }

    return true
}

export { isPalindrome }