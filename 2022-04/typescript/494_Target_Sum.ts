
function findTargetSumWays(nums: number[], target: number): number {
    const cache = new Map<string, number>()
    function dfs(i: number, s: number): number {
        const cacheKey = [i, s].join('_')
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey)
        }
        if (i === nums.length) {
            return s === target ? 1 : 0
        }
        cache.set(cacheKey, dfs(i + 1, s + nums[i]) + dfs(i + 1, s - nums[i]))
        return cache.get(cacheKey)
    }
    return dfs(0, 0)
}

// TODO with DP