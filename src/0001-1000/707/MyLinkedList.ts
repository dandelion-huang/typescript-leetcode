import { ListNode } from 'classes/SinglyLinkedListNode'

// <Design, Singly Linked List>
//       initialize / get / addAtHead / addAtTail / addAtIndex / deleteAtIndex
// Time: O(1) / O(index) / O(1) / O(n) / O(index) / O(index)
// Space: O(1) / O(1) / O(1) / O(1) / O(1) / O(1)

class MyLinkedList {
    private size: number
    private dummyHead: ListNode

    private constructor() {
        this.size = 0
        this.dummyHead = new ListNode(-1) // dummy head (sentinel node)
    }

    public get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1
        }

        let cur = this.dummyHead

        for (let i = 0; i <= index; i++) {
            cur = cur.next!
        }

        return cur.val
    }

    public addAtHead(val: number) {
        this.addAtIndex(0, val)
    }

    public addAtTail(val: number) {
        this.addAtIndex(this.size, val)
    }

    public addAtIndex(index: number, val: number) {
        if (index > this.size) {
            return
        }

        index = Math.max(0, index)

        let prev = this.dummyHead

        for (let i = 0; i < index; ++i) {
            prev = prev.next!
        }

        const newNode = new ListNode(val, prev.next)

        prev.next = newNode
        ++this.size
    }

    public deleteAtIndex(index: number) {
        if (index < 0 || index >= this.size) {
            return
        }

        let prev = this.dummyHead

        for (let i = 0; i < index; ++i) {
            prev = prev.next!
        }

        prev.next = prev.next!.next
        --this.size
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

export { MyLinkedList }
