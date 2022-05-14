class Solution:
    def rotateRight(self, head: Optional[ListNode], k: int) -> Optional[ListNode]:
        if not head: return head

        length = 1
        tail = head
        while tail.next:
            length += 1
            tail = tail.next

        steps = k % length
        if steps == 0: return head

        steps = length - steps - 1
        mid = head
        while steps:
            steps -= 1
            mid = mid.next

        new_head = mid.next
        mid.next = None
        tail.next = head
        return new_head