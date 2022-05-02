function removeNthFronEnd(head, n) {
    const start = new ListNode(0, head)
    let slow = start, fast = start
    while (n >= 0) {
        n--
        fast = fast.next
    }
    while (fast) {
        slow = slow.next
        fast = fast.next
    }
    slow.next = slow.next.next
    return start.next
}