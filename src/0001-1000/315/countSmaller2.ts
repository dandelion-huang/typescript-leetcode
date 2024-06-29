// <Recursion, DivideAndConquer, Merge Sort>
// Time: O(nlogn)
// Space: O(n)

class MySortHelper {
    private nums: number[]
    private indexes: number[]
    private temp: number[]
    private counts: number[]

    public constructor(nums: number[]) {
        this.nums = nums
        this.indexes = nums.map((_, index) => index)
        this.temp = new Array(nums.length)
        this.counts = new Array(nums.length).fill(0)
    }

    // 1. merge sort
    private merge(left: number, mid: number, right: number): void {
        for (let i = left; i <= right; ++i) {
            this.temp[i] = this.indexes[i]
        }

        let i = left
        let j = mid + 1
        let count = 0

        for (let p = left; p <= right; ++p) {
            if (i === mid + 1) {
                this.indexes[p] = this.temp[j]
                ++j
                // } else if (j === right + 1) {
                //     this.indexes[p] = this.temp[i]
                //     this.counts[this.temp[i]] += count
                //     ++i
            } else if (this.nums[this.temp[i]] > this.nums[this.temp[j]]) {
                this.indexes[p] = this.temp[j]
                ++j
                ++count
            } else {
                this.indexes[p] = this.temp[i]
                this.counts[this.temp[i]] += count
                ++i
            }
        }
    }

    public sort(left = 0, right: number = this.nums.length - 1): void {
        if (left >= right) {
            return
        }

        const mid = (left + right) >>> 1

        this.sort(left, mid)
        this.sort(mid + 1, right)
        this.merge(left, mid, right)
    }

    public getCounts(): number[] {
        return this.counts
    }
}

function countSmaller(nums: number[]): number[] {
    const mySortHelper = new MySortHelper(nums)

    mySortHelper.sort()

    return mySortHelper.getCounts()
}

export { countSmaller }
