/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
    if (!head) return head

    // Get list length & last node
    let len = 1
    let tail = head
    while (tail.next) {
        len++
        tail = tail.next
    }

    // If k is list's length N times, means need do nothing
    let steps = k % len
    if (steps === 0) return head

    // Find the new head previous node
    steps = len - steps - 1
    mid = head
    while (steps) {
        steps--
        mid = mid.next
    }

    // Cut & rejoin new list
    const newHead = mid.next
    mid.next = null
    tail.next = head
    return newHead
}