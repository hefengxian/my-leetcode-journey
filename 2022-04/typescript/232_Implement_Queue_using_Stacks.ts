
class MyQueue {
    s1: number[]
    s2: number[]

    constructor() {
        this.s1 = []
        this.s2 = []
    }

    push(x: number) {
        this.s1.push(x)
    }

    pop(): number {
        this.peek()
        return this.s2.pop()
    }

    peek(): number {
        if (this.s2.length == 0) {
            while (this.s1.length > 0) {
                this.s2.push(this.s1.pop())
            }
        }
        return this.s2[this.s2.length - 1]
    }

    empty(): boolean {
        return this.s1.length == 0 && this.s2.length == 0
    }
}