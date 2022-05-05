function isPalindrome(head) {
    let reverseHalf = null
    let fast = head
    let slow = head
    while (fast && fast.next) {
        fast = fast.next.next
        let tmp = slow
        slow = slow.next
        tmp.next = reverseHalf
        reverseHalf = tmp
    }
    if (fast) {
        slow = slow.next
    }
    while (reverseHalf && reverseHalf.val === slow.val) {
        slow = slow.next
        reverseHalf = reverseHalf.next
    }
    return !reverseHalf
}