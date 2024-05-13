import { ListNode } from 'classes/SinglyLinkedListNode'

// <Recursion, Math>

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let [head, tail]: [ListNode | null, ListNode | null] = [null, null]
    let carry = 0

    while (l1 || l2) {
        const sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry

        if (!head) {
            head = new ListNode(sum % 10)
            tail = head
        } else {
            tail!.next = new ListNode(sum % 10)
            tail = tail!.next
        }

        carry = Math.floor(sum / 10)

        if (l1) {
            l1 = l1.next
        }

        if (l2) {
            l2 = l2.next
        }
    }

    // handle the carry
    if (carry) {
        tail!.next = new ListNode(carry)
    }

    return head
}

export { addTwoNumbers }
