"""
https://leetcode.com/problems/perfect-squares/
"""


class Solution:
    def numSquares(self, n: int) -> int:
        # 这里只使用 BFS 解
        # 获取平方列表
        sq_list = []
        i = 1
        while i * i <= n:
            sq_list.append(i * i)
            i += 1

        result = 0
        need_check = {n}  # 这个写法是 set 的字面量写法
        while need_check:
            result += 1
            tmp = set()
            for x in need_check:
                for y in sq_list:
                    if x == y:
                        return result
                    if x < y:
                        break
                    tmp.add(x - y)
            need_check = tmp
        return result


s = Solution()
print(s.numSquares(12))    # 3
