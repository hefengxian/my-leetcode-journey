
function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    const start = new ListNode(0, head)
    let slow = start, fast = start
    // 先前进 n 步或者 n + 1，主要是取决于后面的循环怎么判断
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