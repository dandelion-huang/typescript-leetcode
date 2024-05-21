import { ListNode } from 'classes/SinglyLinkedListNode'
import { addTwoNumbers as addTwoNumbersHelper } from '0001-1000/2/addTwoNumbers'
import { reverseList } from '0001-1000/206/reverseList'

// <Recursion, Math>
// Time: O(max(n, m))
// Space: O(1)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    l1 = reverseList(l1)
    l2 = reverseList(l2)

    // remember to reverse the result again
    return reverseList(addTwoNumbersHelper(l1, l2))
}

export { addTwoNumbers }
