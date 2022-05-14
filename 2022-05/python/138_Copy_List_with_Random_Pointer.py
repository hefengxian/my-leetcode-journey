class Solution:
    def copyRandomList(self, head: 'Optional[Node]') -> 'Optional[Node]':
        # return self.oneLoop(head)
        return self.twoLoop(head)
    
    def oneLoop(self, head: 'Optional[Node]') -> 'Optional[Node]':
        import collections
        d = collections.defaultdict(lambda: Node())
        d[None] = None
        p = head
        while p:
            d[p].val = p.val
            d[p].next = d[p.next]
            d[p].random = d[p.random]
            p = p.next
        return d[head]

    def twoLoop(self, head: 'Optional[Node]') -> 'Optional[Node]':
        d = dict()
        f = s = head
        while f:
            d[f] = Node(f.val)
            f = f.next
        while s:
            d[s].next = d.get(s.next)
            d[s].random = d.get(s.random)
            s = s.next
        return d.get(head)
