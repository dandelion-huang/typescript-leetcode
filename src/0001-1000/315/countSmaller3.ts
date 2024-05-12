import { BinaryIndexedTree } from 'classes/BinaryIndexedTree'
import { ascendingOrderDiscretizer } from 'utils/discretizer/ascendingOrderDiscretizer'

// <Recursion, DivideAndConquer, Binary Indexed Tree>
// Time: O(nlogn)
// Space: O(n)

function countSmaller(nums: number[]): number[] {
    const discretizer = ascendingOrderDiscretizer(nums)
    const tree = new BinaryIndexedTree(discretizer.size, 0, (a, b) => a + b)
    const ans = new Array(nums.length)

    for (let i = nums.length - 1; i >= 0; --i) {
        ans[i] = tree.query(discretizer.get(nums[i])! - 1)
        tree.update(discretizer.get(nums[i])!, 1)
    }

    return ans
}

export { countSmaller }
