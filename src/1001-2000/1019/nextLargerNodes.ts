import { ListNode } from 'classes/SinglyLinkedListNode'

function nextLargerNodes(head: ListNode | null): number[] {
    // edge cases
    if (!head) {
        return []
    }

    const ans: number[] = []
    const stack: [number, number][] = []
    let index = -1
    let cur: ListNode | null = head

    while (cur) {
        ++index
        ans.push(0)

        while (stack.length && cur.val > stack[stack.length - 1][1]) {
            ans[stack.pop()![0]] = cur.val
        }

        stack.push([index, cur.val])
        cur = cur.next
    }

    return ans
}

export { nextLargerNodes }
