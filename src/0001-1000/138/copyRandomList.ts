import { ListNode as _Node } from 'classes/SinglyLinkedListNodeWithRandomPointer'

// <Recursion, HashTable>
// Time: O(n)
// Space: O(n)

function copyHelper(head: _Node | null, copyMap: Map<_Node, _Node>): _Node | null {
    if (!head) {
        return head
    }

    if (!copyMap.has(head)) {
        const newHead = new _Node(head.val)

        copyMap.set(head, newHead)
        newHead.next = copyHelper(head.next, copyMap)
        newHead.random = copyHelper(head.random, copyMap)
    }

    return copyMap.get(head)!
}

function copyRandomList(head: _Node | null): _Node | null {
    const copyMap = new Map<_Node, _Node>() // Map<node, copy>

    return copyHelper(head, copyMap)
}

export { copyRandomList }
