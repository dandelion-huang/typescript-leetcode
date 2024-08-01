import { UnionFindWithRank } from 'classes/UnionFindWithRank'

// <Union Find, Math>
// Time: O(nα(n) * sqrt(m)), α() is the inverse Ackermann function
// Space: O(m)
//        n for the number of numbers
//        m for the maximum number

function largestComponentSize(nums: number[]): number {
    // edge cases
    if (!nums.length) {
        return 0
    }

    const m = Math.max(...nums)
    const uf = new UnionFindWithRank(m + 1)

    for (const num of nums) {
        for (let i = 2; i ** 2 <= num; ++i) {
            if (num % i === 0) {
                uf.union(num, i)
                uf.union(num, num / i)
            }
        }
    }

    const counts: number[] = new Array(m + 1).fill(0)
    let largestComponentSize = 0

    for (const num of nums) {
        const root = uf.find(num)

        ++counts[root]
        largestComponentSize = Math.max(largestComponentSize, counts[root])
    }

    return largestComponentSize
}

export { largestComponentSize }
