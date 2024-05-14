import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, Math, Stack>
// Time: O(max(n, m))
// Space: O(n + m)

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const stack1: number[] = []
    const stack2: number[] = []

    while (l1) {
        stack1.push(l1.val)
        l1 = l1.next
    }

    while (l2) {
        stack2.push(l2.val)
        l2 = l2.next
    }

    let head: ListNode | null = null
    let carry = 0

    while (stack1.length || stack2.length || carry !== 0) {
        const sum = (stack1.pop() ?? 0) + (stack2.pop() ?? 0) + carry
        const curNode = new ListNode(sum % 10)

        carry = Math.floor(sum / 10)
        curNode.next = head
        head = curNode
    }

    return head
}

export { addTwoNumbers }
