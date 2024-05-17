import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, HashTable>
// Time: O(n)
// Space: O(n)

function detectCycle(head: ListNode | null): ListNode | null {
    const visited = new Set<ListNode>()

    while (head) {
        if (visited.has(head)) {
            return head
        }

        visited.add(head)
        head = head.next
    }

    return null
}

export { detectCycle }
