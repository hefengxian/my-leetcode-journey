/*
 https://leetcode.com/problems/min-stack/
*/

class MinStack {
    list: Array<[number, number]> = []

    push(val: number) {
        if (this.list.length > 0) {
            this.list.push([val, Math.min(this.getMin(), val)])
        } else {
            this.list.push([val, val])
        }
    }

    pop() {
        this.list.pop()
    }

    top(): number {
        return this.list[this.list.length - 1][0]
    }

    getMin(): number {
        return this.list[this.list.length - 1][1]
    }
}