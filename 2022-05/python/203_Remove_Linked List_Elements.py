class Solution:
    def removeElements(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        return self.recursively(head, val)
        return self.iteratively(head, val)

    def recursively(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        if not head: return None
        head.next = self.recursively(head.next, val)
        return head.next if head.val == val else head

    def iteratively(self, head: Optional[ListNode], val: int) -> Optional[ListNode]:
        start = ListNode(-1, head)
        cur = start
        while cur.next:
            if cur.next.val == val:
                cur.next = cur.next.next
            else:
                cur = cur.next
        return start.next

