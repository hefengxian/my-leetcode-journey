
function dailyTemperatures(T: Array<number>): Array<number> {
    const answer = new Array(T.length).fill(0)
    const stack = []

    T.forEach((v, k) => {
        while (stack.length > 0 && v > T[stack[stack.length - 1]]) {
            const index = stack.pop()
            answer[index] = k - index
        }
        stack.push(k)
    })

    return answer
}