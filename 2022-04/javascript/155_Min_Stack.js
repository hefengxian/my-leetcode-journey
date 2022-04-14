/*
 https://leetcode.com/problems/min-stack/
*/

class MinStack {

    constructor() {
        this.list = []
    }

    /**
     * @param {number} val 
     * @return {void}
     */
    push(val) {
        if (this.list.length > 0) {
            this.list.push([val, Math.min(this.getMin(), val)])
        } else {
            this.list.push([val, val])
        }
    }

    /**
     * @return {void}
     */
    pop() {
        this.list.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.list[this.list.length - 1][0]
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.list[this.list.length - 1][1]
    }
}

