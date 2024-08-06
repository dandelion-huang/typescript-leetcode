import { compareFn } from 'utils/compareFn/alphabeticallyCompareFn'

// <Recursion, DFS, HashTable>
// Time: O(nlogn)
// Space: O(n)

function dfs(
    accounts: string[][],
    emailSet: Set<string>,
    emailToIndexes: Map<string, number[]>,
    visited: boolean[],
    index: number,
) {
    visited[index] = true

    for (let i = 1; i < accounts[index].length; ++i) {
        const email = accounts[index][i]

        if (emailSet.has(email)) {
            continue
        }

        emailSet.add(email)

        for (const j of emailToIndexes.get(email)!) {
            if (!visited[j]) {
                dfs(accounts, emailSet, emailToIndexes, visited, j)
            }
        }
    }
}

function accountsMerge(accounts: string[][]): string[][] {
    // edge cases
    if (!accounts.length) {
        return []
    }

    const n = accounts.length
    const emailToIndexes = new Map<string, number[]>() // Map<email, index[]>

    for (let i = 0; i < n; ++i) {
        for (let j = 1; j < accounts[i].length; ++j) {
            const email = accounts[i][j]

            if (!emailToIndexes.has(email)) {
                emailToIndexes.set(email, [])
            }

            emailToIndexes.get(email)!.push(i)
        }
    }

    const visited: boolean[] = new Array(n)
    const emailSet = new Set<string>() // Set<email>
    const mergedAccounts: string[][] = []

    for (let i = 0; i < n; ++i) {
        if (!visited[i]) {
            emailSet.clear()
            dfs(accounts, emailSet, emailToIndexes, visited, i)
            mergedAccounts.push([accounts[i][0], ...Array.from(emailSet).sort(compareFn)])
        }
    }

    return mergedAccounts
}

export { accountsMerge }
