function isPalindrome(head: null | ListNode): boolean {
    let rev: null | ListNode = null
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        let tmp = slow
        slow = slow.next
        tmp.next = rev
        rev = tmp
    }
    if (fast) {
        slow = slow.next
    }
    while (rev && rev.val === slow.val) {
        rev = rev.next
        slow = slow.next
    }
    return !rev
}