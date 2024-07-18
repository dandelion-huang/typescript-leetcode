import { type Helper } from './types'

function updateHelper(value: number, helper: Helper, ans: number[]) {
    if (value === helper.mode) {
        ++helper.count
    } else {
        helper.count = 1
        helper.mode = value
    }

    if (helper.count === helper.maxCount) {
        ans.push(helper.mode)
    }

    if (helper.count > helper.maxCount) {
        helper.maxCount = helper.count
        ans.length = 0 // reset ans, all the arrays that refer to ans will be influenced
        ans.push(helper.mode)
    }
}

export { updateHelper }
