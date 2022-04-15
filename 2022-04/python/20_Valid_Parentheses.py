# https://leetcode.com/problems/valid-parentheses/

class Solution:

    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False
        
        stack = []
        m = {
            '(': ')',
            '{': '}',
            '[': ']',
        }

        for c in s:
            if m.get(c):
                stack.append(m.get(c))
            elif not stack or stack.pop() != c:
                return False
        return not stack


s = Solution()
print(s.isValid('(())'))
print(s.isValid('})'))