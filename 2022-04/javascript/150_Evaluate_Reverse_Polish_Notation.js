/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */


const operators = new Map([
    ['+', (x, y) => x + y],
    ['*', (x, y) => x * y],
    ['-', (x, y) => y - x],
    // 这里其实有好几种取整的方法，toFixed, parseInt, Math.floor, Math.ceil, Math.trunc, 位操作
    // 总的来说 Math.trunc() 与按位运算效率最高
    // n | 0
    // n ^ 0
    // n << 0
    ['/', (x, y) => Math.trunc(y / x)],
])

/**
 * @param {string[]} tokens
 * @return {number}
 */
function evalRPN(tokens) {
    const stack = []
    for (let t of tokens) {
        if (operators.has(t)) {
            stack.push(operators.get(t)(stack.pop(), stack.pop()))
        } else {
            stack.push(Number(t))
        }
    }
    return stack.pop()
}