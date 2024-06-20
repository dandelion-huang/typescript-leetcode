import { ListNode } from 'classes/SinglyLinkedListNode'

// <Iteration, HashTable>
// Time: O(n)
// Space: O(n)

function iterate(listNode: ListNode | null): ListNode | null {
    const visited = new Set<ListNode>()

    while (listNode) {
        if (visited.has(listNode)) {
            return listNode
        }

        visited.add(listNode)
        listNode = listNode.next
    }

    return null
}

function detectCycle(head: ListNode | null): ListNode | null {
    // edge cases
    if (!head?.next) {
        return null
    }

    return iterate(head)
}

export { detectCycle }
