'''
https://leetcode.com/problems/min-stack/
'''

class MinStack:

    def __init__(self):
        self.s = []

    def push(self, val: int) -> None:
        if self.s:
            self.s.append((val, min(self.getMin(), val)))
        else:
            self.s.append((val, val))

    def pop(self) -> None:
        self.s.pop()

    def top(self) -> int:
        return self.s[-1][0]

    def getMin(self) -> int:
        return self.s[-1][1]


if __name__ == '__main__':
    obj = MinStack()
    obj.push(3)
    obj.push(1)
    obj.push(6)
    obj.push(-1)
    obj.pop()
    print(obj.top())
    print(obj.getMin())