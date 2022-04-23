class Solution:
    def decodeString(self, s):
        stack = []
        num_str = ''
        result = ''
        for c in s:
            if c.isnumeric():
                num_str += c
            elif c == '[':
                stack.append(result)
                stack.append(num_str)
                num_str = ''
                result = ''
            elif c == ']':
                n = int(stack.pop())
                prev = stack.pop()
                result = prev + (result * n)
            else:
                result += c
        return result

