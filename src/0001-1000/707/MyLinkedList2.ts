import { ListNode as DoublyListNode } from 'classes/DoublyLinkedListNode'

// <Design, Doubly Linked List>
//       initialize / get / addAtHead / addAtTail / addAtIndex / deleteAtIndex
// Time: O(1) / O(index) / O(1) / O(1) / O(index) / O(index)
// Space: O(1) / O(1) / O(1) / O(1) / O(1) / O(1)

class MyLinkedList {
    private size: number
    private dummyHead: DoublyListNode
    private dummyTail: DoublyListNode
    private constructor() {
        this.size = 0
        this.dummyHead = new DoublyListNode(-1) // dummy head (sentinel node)
        this.dummyTail = new DoublyListNode(-1) // dummy tail (sentinel node)
        this.dummyHead.next = this.dummyTail
        this.dummyTail.prev = this.dummyHead
    }

    public get(index: number): number {
        if (index < 0 || index >= this.size) {
            return -1
        }

        return this.getNode(index).val
    }

    public getNode(index: number): DoublyListNode {
        const isCloseToHead = index < this.size / 2
        let cur = isCloseToHead ? this.dummyHead : this.dummyTail

        if (isCloseToHead) {
            for (let i = 0; i <= index; ++i) {
                cur = cur.next!
            }
        } else {
            for (let i = 0; i < this.size - index; ++i) {
                cur = cur.prev!
            }
        }

        return cur
    }

    public addAtHead(val: number): void {
        this.addAtIndex(0, val)
    }

    public addAtTail(val: number): void {
        this.addAtIndex(this.size, val)
    }

    public addAtIndex(index: number, val: number): void {
        if (index > this.size) {
            return
        }

        const node = this.getNode(index)
        const newNode = new DoublyListNode(val, node.prev, node)

        node.prev!.next = newNode
        node.prev = newNode
        ++this.size
    }

    public deleteAtIndex(index: number): void {
        if (index < 0 || index >= this.size) {
            return
        }

        const node = this.getNode(index)

        node.prev!.next = node.next
        node.next!.prev = node.prev
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
