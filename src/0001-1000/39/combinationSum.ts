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
    if (index === candidates.length) {
        return
    }

    if (target === 0) {
        combinations.push(combination)
        return
    }

    const candidate = candidates[index]

    // recurse the candidate
    if (target - candidate >= 0) {
        backtrack(candidates, target - candidate, combinations, [...combination, candidate], index)
    }

    // skip the candidate
    backtrack(candidates, target, combinations, combination, index + 1)
}

function combinationSum(candidates: number[], target: number): number[][] {
    // edge cases
    if (!candidates.length) {
        return []
    }

    const combinations: number[][] = []

    backtrack(candidates, target, combinations, [], 0)

    return combinations
}

export { combinationSum }
