/**
 * https://leetcode.com/problems/valid-parentheses/
 */


/**
 * @param {string} s 
 * @return {boolean}
 */
function isValid(s) {
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