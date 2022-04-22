class MyStack {
    constructor() {
        this.q = []
    }

    /**
     * @param {number} x 
     */
    push(x) {
        this.q.push(x)
        for (let i = 1; i < this.q.length; i++) {
            this.q.push(this.q.shift())
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.q.shift()
    }

    /**
     * @return {number}
     */
    top() {
        return this.q[0]
    }

    /**
     * @return {boolean}
     */
    empty() {
        return !this.q.length
    }
}