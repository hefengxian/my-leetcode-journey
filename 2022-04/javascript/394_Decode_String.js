/**
 * @param {string} s 
 * @return {string}
 */
function decodeString(s) {
    const stack = []
    let numStr = ''
    let result = ''

    for (let c of s) {
        if (!isNaN(Number(c))) {
            numStr += c
        } else if (c === '[') {
            stack.push(result)
            stack.push(numStr)
            numStr = ''
            result = ''
        } else if (c === ']') {
            const n = Number(stack.pop())
            const prevString = stack.pop()
            result = prevString + (new Array(n).fill(result).join(''))
        } else {
            result += c
        }
    }
    return result
}