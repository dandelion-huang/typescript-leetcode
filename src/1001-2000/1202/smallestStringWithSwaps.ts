import { UnionFindWithSize } from 'classes/UnionFindWithSize'
import { MinPriorityQueue } from '@datastructures-js/priority-queue' // Leetcode

// <Union Find, HashTable>
// Time: O((n + m)α(n) + nlogn), α() is the inverse Ackermann function
// Space: O(n)
//        n for the length of the string
//        m for the number of pairs

function smallestStringWithSwaps(s: string, pairs: number[][]): string {
    // edge cases
    if (!s.length) {
        return ''
    }

    const n = s.length
    const uf = new UnionFindWithSize(n)

    for (const [i, j] of pairs) {
        uf.union(i, j)
    }

    const map = new Map<number, MinPriorityQueue<string>>() // Map<root, queue>

    for (let i = 0; i < n; ++i) {
        const root = uf.find(i)

        if (!map.has(root)) {
            map.set(root, new MinPriorityQueue({ priority: (node: string) => node.charCodeAt(0) }))
        }

        map.get(root)!.enqueue(s[i])
    }

    let str = ''

    for (let i = 0; i < n; ++i) {
        const root = uf.find(i)
        str += map.get(root)!.dequeue().element
    }

    return str
}

export { smallestStringWithSwaps }
