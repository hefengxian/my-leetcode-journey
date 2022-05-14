function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return head
    let len = 1
    let tail = head
    while (tail.next) {
        len++
        tail = tail.next
    }
    let steps = k % len
    if (steps === 0) return head
    steps = len - steps - 1
    let mid = head
    while (steps) {
        steps--
        mid = mid.next
    }
    const newHead = mid.next
    mid.next = null
    tail.next = head
    return newHead
}