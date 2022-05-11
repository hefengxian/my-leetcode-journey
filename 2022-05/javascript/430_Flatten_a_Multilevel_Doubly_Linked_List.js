/**
 * @param {Node | null} head 
 * @return {Node | null}
 */
function flatten(head) {
    if (!head) return head
    const stack = [head]
    let prev = null
    while (stack.length) {
        const cur = stack.pop()
        cur.prev = prev
        if (prev) prev.next = cur
        // 顺序不能倒过来
        if (cur.next) stack.push(cur.next)
        if (cur.child) {
            stack.push(cur.child)
            cur.child = null
        }
        prev = cur
    }
    return head
}