class Node {
    val: number
    prev: Node | null
    next: Node | null
    child: Node | null
    constructor(val=0, prev=null, next=null, child=null) {
        this.val = val
        this.prev = prev
        this.next = next
        this.child = child
    }
}

function flatten(head: Node | null): Node | null {
    if (!head) return head
    const stack = [head]
    let prev: Node | null = null
    while (stack.length) {
        const cur = stack.pop()
        cur.prev = prev
        if (prev) {
            prev.next = cur
        }
        // 这里处理 next/child 的顺序不能倒过来
        if (cur.next) {
            stack.push(cur.next)
        }
        if (cur.child) {
            stack.push(cur.child)
            cur.child = null
        }
        prev = cur
    }
    return head
}

export default {}