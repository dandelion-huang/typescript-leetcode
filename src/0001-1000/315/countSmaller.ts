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
    private merge(left: number, mid: number, right: number) {
        let i = left
        let j = mid + 1
        let p = 0
        let count = 0

        while (i <= mid && j <= right) {
            if (this.nums[this.indexes[i]] <= this.nums[this.indexes[j]]) {
                this.temp[p] = this.indexes[i]
                this.counts[this.indexes[i]] += count
                ++p
                ++i
            } else {
                this.temp[p] = this.indexes[j]
                ++p
                ++j
                ++count
            }
        }

        while (i <= mid) {
            this.temp[p] = this.indexes[i]
            this.counts[this.indexes[i]] += count
            ++p
            ++i
        }

        while (j <= right) {
            this.temp[p] = this.indexes[j]
            ++p
            ++j
        }

        for (let k = 0; k < p; k++) {
            this.indexes[left + k] = this.temp[k]
        }
    }

    public sort(left = 0, right: number = this.nums.length - 1) {
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
