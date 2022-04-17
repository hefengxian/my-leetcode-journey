# https://leetcode.com/problems/evaluate-reverse-polish-notation/

class Solution:
    def __init__(self):
        self.operators = {
            '+': lambda x, y: x + y,
            '*': lambda x, y: x + y,
            '-': lambda x, y: y - x,
            # 这里需要向 0 靠拢，如果使用 floor/ceil 就需要按情况处理（负数是不一样的）
            # int() 操作正好简单的粗暴的干掉小数位
            '/': lambda x, y: int(y / x),  # truncate to zero
        }

    def eval_RPN(self, tokens: List[str]) -> int
        stack = []
        for t in tokens:
            if t in self.operators:
                stack.append(self.operators[t](stack.pop(), stack.pop()))
            else:
                stack.append(int(t))
        return stack.pop()
