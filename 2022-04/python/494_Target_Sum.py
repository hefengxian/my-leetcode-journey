
class Solution:

    def findTargetSumWays(self, nums: List[int], target: int) -> int:
        # DFS with cache
        cache = {}
        def dfs(i: int, s: int) -> int:
            cache_key = f"{i}_{s}"
            if cache_key in cache:
                return cache.get(cache_key)
            if i == len(nums):
                return 1 if s == target else 0
            cache[cache_key] = dfs(i + 1, s + nums[i]) + dfs(i + 1, s - nums[i])
            return cache.get(cache_key)
        return dfs(0, 0)
    
    # TODO with DP