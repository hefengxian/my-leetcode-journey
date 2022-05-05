function oddEvenList(head) {
    if (head) {
        const evenHead = head.next
        let odd = head
        let even = head.next
        while (even && even.next) {
            odd.next = odd.next.next
            even.next = even.next.next
            odd = odd.next
            even = even.next
        }
        odd.next = evenHead
    }
    return head
}