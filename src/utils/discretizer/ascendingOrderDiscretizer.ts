import { discretizerFactory } from './discretizerFactory'

function ascendingOrderDiscretizer(nums: number[]): Map<number, number> {
    return discretizerFactory<number>(nums, (a, b) => a - b)
}

export { ascendingOrderDiscretizer }
