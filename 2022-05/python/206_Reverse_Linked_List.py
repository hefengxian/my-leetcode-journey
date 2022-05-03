class Solution:

    def reverseList(head: Optional[ListNode]) -> Optional[ListNode]:
        prev = None
        while head:
            cur = head
            head = head.next
            cur.next = prev
            prev = cur
        return prev