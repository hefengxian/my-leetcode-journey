
class Solution:

    def dailyTemperatures(self, T: List[int]) -> List[int]:
        answer = [0] * len(T)
        s = []
        for i, t in enumerate(T):
            while s and t > T[s[-1]]:
                idx = s.pop()
                answer[idx] = i - idx
            s.append(i)
        return answer