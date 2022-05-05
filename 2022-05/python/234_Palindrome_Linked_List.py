class Solution:
    def isPalindrome(self, head: Optional[ListNode]) -> bool:
        rev_half = None
        slow, fast = head, head
        while fast and fast.next:
            fast = fast.next.next
            rev_half, rev_half.next, slow = slow, rev_half, slow.next
        if fast:
            slow = slow.next
        while rev_half and rev_half.val == slow.val:
            rev_half = rev_half.next
            slow = slow.next
        return not rev_half
