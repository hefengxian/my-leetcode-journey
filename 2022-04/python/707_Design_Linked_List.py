class MyListNode:

    def __init__(self, val: int):
        self.val = val
        self.next = None


class MyLinkedList:

    def __init__(self):
        self.head = None
        self.size = 0

    def addAtIndex(self, index: int, val: int) -> None:
        if 0 <= index <= self.size:
            new_node = MyListNode(val)
            self.size += 1
            if index == 0:
                new_node.next = self.head
                self.head = new_node
            else:
                prev = self.head
                while index > 1:
                    index -= 1
                    prev = prev.next
                new_node.next = prev.next
                prev.next = new_node

    def get(self, index: int) -> int:
        if 0 <= index < self.size:
            target = self.head
            while index > 0:
                index -= 1
                target = target.next
            return target.val
        return -1

    def deleteAtIndex(self, index: int) -> None:
        if 0 <= index < self.size:
            self.size -= 1
            if index == 0:
                self.head = self.head.next
            else:
                prev = self.head
                while index > 1:
                    index -= 1
                    prev = prev.next
                prev.next = prev.next.next

    def addAtHead(self, val: int) -> None:
        self.addAtIndex(0, val)

    def addAtTail(self, val: int) -> None:
        self.addAtIndex(self.size, val)