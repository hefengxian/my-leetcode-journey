function decodeString(s: string): string {
    const stack: string[] = []
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
            const prev = stack.pop()
            result = prev + (new Array(n).fill(result).join(''))
        } else {
            result += c
        }
    }
    return result
}