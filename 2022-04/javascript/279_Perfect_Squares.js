/*
 * https://leetcode.com/problems/perfect-squares/
 */

/**
 *
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
    // 这里使用 BFS，由于现在还没有学习 DP 所以不用 DP 解
    // 生成平方列表
    const sqList = []
    let i = 1
    while (i * i <= n) {
        sqList.push(i * i)
        i++
    }

    let result = 0
    let needCheck = new Set([n])
    // 这里做的时候还犯了一个低级错误，Set 的大小是属性 size 而不是 length
    while (needCheck.size > 0) {
        result++
        const tmp = new Set()
        for (let x of needCheck) {
            for (let y of sqList) {
                if (x === y) return result
                if (x < y) break
                tmp.add(x - y)
            }
        }
        needCheck = tmp
    }
    return result
}

console.log(numSquares(12), 3)