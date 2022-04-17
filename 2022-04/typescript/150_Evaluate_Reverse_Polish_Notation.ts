/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/
 * 
 * 这个题需要注意的地方：
 * 1. 在 -/ 操作的时候，stack.pop() 的顺序
 * 2. truncate to zero 取整，尤其是负数的时候；比较好的办法是 Math.trunc() 方法，或者刁钻一点的按位操作
 */

const operators: Map<string, (x: number, y: number) => number> = new Map([
    ['+', (x, y) => x + y],
    ['*', (x, y) => x * y],
    ['-', (x, y) => y - x],
    // 这里其实有好几种取整的方法，toFixed, parseInt, Math.floor, Math.ceil, Math.trunc, 位操作
    // 总的来说 Math.trunc() 与按位运算效率最高
    // n | 0
    // n ^ 0
    // n << 0
    ['/', (x, y) => Math.trunc(y / x)],  // Truncate to zero
])

function evalRPN(tokens: string[]): number {
    const stack: number[] = []
    tokens.forEach(t => {
        if (operators.has(t)) {
            stack.push(operators.get(t)(stack.pop(), stack.pop()))
        } else {
            stack.push(Number(t))
        }
    })
    return stack.pop()
}