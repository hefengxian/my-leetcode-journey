class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

/**
 * @param {ListNode} head 
 * @return {boolean}
 */
function hasCycle(head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        if (slow === fast) {
            return true
        }
    }
    return false
}