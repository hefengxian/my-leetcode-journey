class MyListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class MyLinkedList {
    constructor() {
        this.head = null
        this.size = 0
    }

    addAtIndex(index, val) {
        if (index < 0 || index > this.size) return
        const newNode = new MyListNode(val)
        this.size++
        if (index === 0) {
            newNode.next = this.head
            this.head = newNode
        } else {
            let prev = this.head
            while (index > 1) {
                prev = prev.next
                index--
            }
            newNode.next = prev.next
            prev.next = newNode
        }
    }

    get(index) {
        if (index < 0 || index >= this.size) return -1
        let target = this.head
        while (index > 0) {
            target = target.next
            index--
        }
        return target.val
    }

    deleteAtIndex(index) {
        if (index >= 0 && index < this.size) {
            this.size--
            if (index === 0) {
                this.head = this.head.next
            } else {
                let prev = this.head
                while (index > 1) {
                    prev = prev.next
                    index--
                }
                prev.next = prev.next.next
            }
        }
    }

    addAtHead(val) {
        this.addAtIndex(0, val)
    }

    addAtTail(val) {
        this.addAtIndex(this.size, val)
    }
}