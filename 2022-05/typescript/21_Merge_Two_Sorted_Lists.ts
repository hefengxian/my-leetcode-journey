function mergeTwoLists(l1: null | ListNode, l2: null | ListNode): null | ListNode {
    return recursively(l1, l2)
    return iteratively(l1, l2)
}

function recursively(l1: null | ListNode, l2: null | ListNode): null | ListNode {
    if (!l1 || !l2) {
        return l1 ? l1 : l2
    }
    if (l1.val < l2.val) {
        l1.next = recursively(l1.next, l2)
        return l1
    } else {
        l2.next = recursively(l1, l2.next)
        return l2
    }
}

function iteratively(l1: null | ListNode, l2: null | ListNode): null | ListNode {
    const start = new ListNode()
    let cur = start
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1
            l1 = l1.next
        } else {
            cur.next = l2
            l2 = l2.next
        }
        cur = cur.next
    }
    cur.next = l1 || l2
    return start.next
}