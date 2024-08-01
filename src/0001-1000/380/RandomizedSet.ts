import { swap } from 'utils/swap/swapArrayElements'

// <Design, Map, Randomized>
//       initialize / insert / remove / getRandom
// Time: O(1) / O(1) / O(1) / O(1)
// Space: O(1) / O(1) / O(1) / O(1)

class RandomizedSet<T> {
    nums: T[]
    valToIndexMap: Map<T, number> // Map<val, index>

    private constructor() {
        this.nums = []
        this.valToIndexMap = new Map()
    }

    public insert(val: T): boolean {
        if (this.valToIndexMap.has(val)) {
            return false
        }

        this.valToIndexMap.set(val, this.nums.length)
        this.nums.push(val)

        return true
    }

    public remove(val: T): boolean {
        if (!this.valToIndexMap.has(val)) {
            return false
        }

        const index = this.valToIndexMap.get(val)!

        this.valToIndexMap.set(this.nums[this.nums.length - 1], index)
        swap(this.nums, index, this.nums.length - 1)
        this.valToIndexMap.delete(val)
        this.nums.pop()

        return true
    }

    public getRandom(): T {
        if (!this.valToIndexMap.size) {
            throw new Error('the set is empty')
        }

        return this.nums[Math.floor(Math.random() * this.nums.length)]
    }
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

export { RandomizedSet }
