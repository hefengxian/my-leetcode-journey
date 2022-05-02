class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        start = ListNode(0, head)
        slow, fast = start, start
        while n >= 0:
            n -= 1
            fast = fast.next
        while fast:
            fast.next
            slow.next
        slow.next = slow.next.next
        return start.next