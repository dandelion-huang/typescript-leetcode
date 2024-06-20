import { ListNode as _Node } from 'classes/SinglyLinkedListNodeWithRandomPointer'

// In this solution, we generate a linked list like:
// A -> A' -> B -> B' -> ... -> Z -> Z'
// where A, B, ..., Z are the original nodes
// and A', B', ..., Z' are the copied nodes
// and then traverse it again to handle the pointers

// <Iteration>
// Time: O(n)
// Space: O(1)

function iterate(listNode: _Node): _Node {
    let curNode: _Node | null

    for (curNode = listNode; curNode; curNode = curNode.next!.next) {
        const newNode: _Node = new _Node(curNode.val, curNode.next) // the random pointer is null

        curNode.next = newNode
    }

    for (curNode = listNode; curNode; curNode = curNode.next!.next) {
        const newNode = curNode.next!

        newNode.random = curNode.random?.next ?? null
    }

    const newHead = listNode.next!

    for (curNode = listNode; curNode; curNode = curNode.next) {
        const newNode: _Node = curNode.next!

        curNode.next = newNode.next
        newNode.next = newNode.next?.next ?? null
    }

    return newHead
}

function copyRandomList(head: _Node | null): _Node | null {
    // edge cases
    if (!head) {
        return head
    }

    return iterate(head)
}

export { copyRandomList }
