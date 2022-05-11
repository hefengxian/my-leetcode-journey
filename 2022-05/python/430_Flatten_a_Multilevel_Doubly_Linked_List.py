class Solution:
    def flatten(self, head):
        if not head: return head
        stack = [head]
        prev = None
        while stack:
            cur = stack.pop()
            cur.prev = prev
            if prev:
                prev.next = cur
            if cur.next:
                stack.append(cur.next)
            if cur.child:
                stack.append(cur.child)
                cur.child = None
            prev = cur
        return head