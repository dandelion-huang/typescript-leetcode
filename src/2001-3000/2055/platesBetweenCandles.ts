// Time: O(n)
// Space: O(n)

function platesBetweenCandles(s: string, queries: number[][]): number[] {
    const n = s.length

    let platesLeft = 0
    let candleLeft = -1
    let candleRight = -1

    // 1. prefix sum
    const prefixSum: number[] = []

    // 2. memorize the nearest index of the candles
    const nearestCandleOnTheLeft: number[] = []
    const nearestCandleOnTheRight: number[] = []

    for (let i = 0; i < n; ++i) {
        if (s[i] === '|') {
            candleLeft = i
        } else {
            ++platesLeft
        }

        prefixSum.push(platesLeft)
        nearestCandleOnTheLeft.push(candleLeft)

        if (s[n - i - 1] === '|') {
            candleRight = n - i - 1
        }

        nearestCandleOnTheRight.push(candleRight)
    }

    nearestCandleOnTheRight.reverse()

    const ans: number[] = []

    // 3. traverse the queries
    for (const query of queries) {
        const [left, right] = query
        const l = s[left] === '|' ? left : nearestCandleOnTheRight[left]
        const r = s[right] === '|' ? right : nearestCandleOnTheLeft[right]

        if (l < 0 || r < 0 || r < l) {
            ans.push(0)
        } else {
            ans.push(prefixSum[r] - prefixSum[l])
        }
    }

    return ans
}

export { platesBetweenCandles }
