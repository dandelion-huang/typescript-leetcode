// <Monotonic Stack>
// Time: O(n)
// Space: O(n)

class StockSpanner {
    stack: [number, number][]
    index: number

    constructor() {
        this.stack = [[-1, Infinity]] // [index, price]
        this.index = -1 // for day: -1
    }

    next(price: number): number {
        ++this.index

        while (this.stack[this.stack.length - 1][1] <= price) {
            this.stack.pop()
        }

        const ans = this.index - this.stack[this.stack.length - 1][0]

        this.stack.push([this.index, price])

        return ans
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

export { StockSpanner }
