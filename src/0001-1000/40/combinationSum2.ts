// <Recursion, Backtracking>
// Time: O(n * 2^n)
// Space: O(m)
//        n for the length of candidates
//        m for the target (constraints: candidates[i] is positive integer)

// 1. backtracking
function backtrack(
    candidates: number[],
    target: number,
    combinations: number[][],
    combination: number[],
    index: number,
) {
    if (target === 0) {
        combinations.push(combination.slice())

        return
    }

    for (let i = index; i < candidates.length; ++i) {
        const candidate = candidates[i]

        if (target < candidate) {
            break
        }

        if (i > index && candidate === candidates[i - 1]) {
            continue
        }

        combination.push(candidate)
        backtrack(candidates, target - candidate, combinations, combination, i + 1)
        combination.pop()
    }
}

function combinationSum2(candidates: number[], target: number): number[][] {
    // edge cases
    if (!candidates.length) {
        return []
    }

    const combinations: number[][] = []

    candidates.sort((a, b) => a - b)
    backtrack(candidates, target, combinations, [], 0)

    return combinations
}

export { combinationSum2 }
