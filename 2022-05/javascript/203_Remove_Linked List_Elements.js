
function removeElements(head, val) {
    return recursively(head, val)
    // return iteratively(head, val)
}

function recursively(head, val) {
    if (!head) return null
    head.next = recursively(head.next, val)
    return head.val === val ? head.next : head
}

function iteratively(head, val) {
    const start = new ListNode(-1, head)
    let cur = start
    while (cur.next) {
        if (cur.next.val === val) {
            cur.next = cur.next.next
        } else {
            cur = cur.next
        }
    }
    return start.next
}