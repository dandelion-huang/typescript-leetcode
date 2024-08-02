import { UnionFindWithRank } from 'classes/UnionFindWithRank'

// <Union Find, HashTable>
// Time: O(nlogn * α(n)), α() is the inverse Ackermann function
// Space: O(n)

function accountsMerge(accounts: string[][]): string[][] {
    // edge cases
    if (!accounts.length) {
        return []
    }

    const n = accounts.length
    const uf = new UnionFindWithRank(n)
    const emailToIndex = new Map<string, number>() // Map<email, index>

    for (let i = 0; i < n; ++i) {
        for (let j = 1; j < accounts[i].length; ++j) {
            const email = accounts[i][j]

            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, i)
                continue
            }

            uf.union(i, emailToIndex.get(email)!)
        }
    }

    const indexToEmails = new Map<number, Set<string>>() // Map<index, Set<email>>

    for (let i = 0; i < n; ++i) {
        const root = uf.find(i)

        if (!indexToEmails.has(root)) {
            indexToEmails.set(root, new Set<string>())
        }

        for (let j = 1; j < accounts[i].length; ++j) {
            indexToEmails.get(root)!.add(accounts[i][j])
        }
    }

    const mergedAccounts: string[][] = []

    for (const [index, emails] of indexToEmails) {
        mergedAccounts.push([accounts[index][0], ...Array.from(emails).sort()])
    }

    return mergedAccounts
}

export { accountsMerge }
