function addTwoNumbers(l1, l2) {
    const res = new ListNode(0)
    let cur = res, carry = 0
    while (l1 || l2 || carry) {
        if (l1) {
            carry += l1.val
            l1 = l1.next
        }
        if (l2) {
            carry += l2.val
            l2 = l2.next
        }
        cur.next = new ListNode(carry % 10)
        cur = cur.next
        carry = Math.trunc(carry / 10)
    }
    return res.next
}