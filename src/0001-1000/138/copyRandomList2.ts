import { ListNode as _Node } from 'classes/SinglyLinkedListNodeWithRandomPointer'

// In this solution, we generate a linked list like:
// A -> A' -> B -> B' -> ... -> Z -> Z'
// where A, B, ..., Z are the original nodes
// and A', B', ..., Z' are the copied nodes
// and then traverse it again to handle the pointers

// <Iteration>
// Time: O(n)
// Space: O(1)

function copyRandomList(head: _Node | null): _Node | null {
    // edge cases
    if (!head) {
        return head
    }

    for (let node: _Node | null = head; node; node = node.next!.next) {
        const newNode: _Node = new _Node(node.val, node.next) // the random pointer is null

        node.next = newNode
    }

    for (let node: _Node | null = head; node; node = node.next!.next) {
        const newNode = node.next!

        newNode.random = node.random?.next ?? null
    }

    const newHead = head.next!

    for (let node: _Node | null = head; node; node = node.next) {
        const newNode: _Node = node.next!

        node.next = newNode.next
        newNode.next = newNode.next?.next ?? null
    }

    return newHead
}

export { copyRandomList }
