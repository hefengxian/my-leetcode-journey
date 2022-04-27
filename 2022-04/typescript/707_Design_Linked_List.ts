class MyListNode {
    val: number
    next: MyListNode | null

    constructor(val: number) {
        this.val = val
        this.next = null
    }
}

class MyLinkedList {
    head: null | MyListNode
    size: number

    constructor() {
        this.head = null
        this.size = 0
    }

    addAtIndex(index: number, val: number) {
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

    get(index: number): number {
        if (index < 0 || index >= this.size) return -1
        let target = this.head
        while (index > 0) {
            index--
            target = target.next
        }
        return target.val
    }

    deleteAtIndex(index: number) {
        if (index < this.size && index >= 0) {
            this.size--
            if (index === 0) {
                this.head = this.head.next
            } else {
                let prev = this.head
                while (index > 1) {
                    index--
                    prev = prev.next
                }
                prev.next = prev.next.next
            }
        }
    }

    addAtHead(val: number) {
        this.addAtIndex(0, val)
    }

    addAtTail(val: number) {
        this.addAtIndex(this.size, val)
    }
}
