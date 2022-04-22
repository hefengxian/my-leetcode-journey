/**
 * 2 Queue solution
 */
// class MyStack {
//     inQue: number[]
//     outQue: number[]

//     constructor() {
//         this.inQue = []
//         this.outQue = []
//     }

//     push(x: number) {
//         this.inQue.push(x)
//         while (this.outQue.length) {
//             this.inQue.push(this.outQue.shift())
//         }
//         while (this.inQue.length) {
//             this.outQue.push(this.inQue.shift())
//         }
//     }

//     pop(): number {
//         return this.outQue.shift()
//     }

//     top(): number {
//         return this.outQue[0]
//     }

//     empty(): boolean {
//         return this.outQue.length === 0
//     }
// }

/**
 * 1 Queue solution
 */
class MyStack {
    private q: number[]

    constructor() {
        this.q = []
    }

    push(x: number) {
        this.q.push(x)
        for (let i = 1; i < this.q.length; i++) {
            this.q.push(this.q.shift())
        }
    }

    pop(): number {
        return this.q.shift()
    }

    top(): number {
        return this.q[0]
    }

    empty(): boolean {
        return !this.q.length
    }
}

