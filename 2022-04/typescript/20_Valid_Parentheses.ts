/**
 * https://leetcode.com/problems/valid-parentheses/
 */


function isValid(s: string): boolean {
    if (s.length % 2 !== 0) return false

    const stack = []
    for (let c of s) {
        if (c === '(') {
            stack.push(')')
        } else if (c === '[') {
            stack.push(']')
        } else if (c === '{') {
            stack.push('}')
        } else if (stack.pop() !== c) {
            return false
        }
    }
    return stack.length === 0
}

console.log(isValid('()'), isValid('(}}'))