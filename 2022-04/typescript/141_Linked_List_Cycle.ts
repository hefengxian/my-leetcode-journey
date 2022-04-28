class ListNode {
    val: number
    next: null | ListNode
    constructor(val) {
        this.val = val
        this.next = null
    }
}

function hasCycle(head: ListNode): boolean {
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