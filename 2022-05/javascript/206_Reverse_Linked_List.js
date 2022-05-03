function reverseList(head) {
    let prev = null
    while (head) {
        let cur = head
        head = head.next
        cur.next = prev
        prev = cur 
    }
    return prev
}