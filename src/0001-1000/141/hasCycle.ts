import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, HashTable>
// Time: O(n)
// Space: O(n)

function hasCycle(head: ListNode | null): boolean {
    const visited = new Set<ListNode>()

    while (head) {
        if (visited.has(head)) {
            return true
        }

        visited.add(head)
        head = head.next
    }

    return false
}

export { hasCycle }
