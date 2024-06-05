import { ListNode } from 'classes/SinglyLinkedListNode'

// Time: O(n)
// Space: O(1), notice that return value is not included in space complexity

function splitListToParts(head: ListNode | null, k: number): (ListNode | null)[] {
    // 1. traverse the list to get the size n
    let n = 0
    let cur = head

    while (cur) {
        ++n
        cur = cur.next
    }

    // 2. let the size of each part w = Math.floor(n / k)
    const w = Math.floor(n / k)

    // 3. let the remainder r = n % k, the first r parts size: w + 1
    const r = n % k

    // 4. initailize a new Array(k) as the answer container and solve the problem
    const ans: (ListNode | null)[] = []
    cur = head

    for (let i = 0; i < k; ++i) {
        const curHead = cur
        for (let j = 1; j < w + (i < r ? 1 : 0); ++j) {
            if (cur) {
                cur = cur.next
            }
        }
        if (cur) {
            const temp = cur.next
            cur.next = null
            cur = temp
        }
        ans[i] = curHead
    }

    return ans
}

export { splitListToParts }
