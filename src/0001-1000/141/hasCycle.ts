import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, HashTable>
// Time: O(n)
// Space: O(n)

function iterate(listNode: ListNode | null): boolean {
    const visited = new Set<ListNode>()

    while (listNode) {
        if (visited.has(listNode)) {
            return true
        }

        visited.add(listNode)
        listNode = listNode.next
    }

    return false
}

function hasCycle(head: ListNode | null): boolean {
    // edge cases
    if (!head?.next) {
        return false
    }

    return iterate(head)
}

export { hasCycle }
