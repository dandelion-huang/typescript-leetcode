import { UnionFindWithRank } from 'classes/UnionFindWithRank'

// <Union Find>
// Time: O(n^2 * α(m) + nlogn), α() is the inverse Ackermann function
// Space: O(n)
//        n for the number of strings
//        m for the length of the strings

function isSimilar(str1: string, str2: string, length: number): boolean {
    let diff = 0

    for (let i = 0; i < length; ++i) {
        if (str1[i] !== str2[i]) {
            ++diff

            if (diff > 2) {
                return false
            }
        }
    }

    return true
}

function numSimilarGroups(strs: string[]): number {
    // edge cases
    if (!strs.length) {
        return 0
    }

    const n = strs.length
    const m = strs[0].length
    const uf = new UnionFindWithRank(n)

    for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
            if (isSimilar(strs[i], strs[j], m)) {
                uf.union(i, j)
            }
        }
    }

    return uf.getCount()
}

export { numSimilarGroups }
