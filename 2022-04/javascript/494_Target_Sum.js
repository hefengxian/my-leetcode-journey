
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function findTargetSumWays(nums, target) {
    // DFS with Cache
    const cache = new Map()

    /**
     * @param {number} i 
     * @param {number} sum 
     * @return {number}
     */
    function dfs(i, sum) {
        const cacheKey = [i, sum].join('_')
        if (cache.has(cacheKey)) {
            return cache.get(cacheKey)
        }
        if (i === nums.length) {
            return sum === target ? 1 : 0
        }
        cache.set(cacheKey, dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]))
        return cache.get(cacheKey)
    }
    return dfs(0, 0)
}

// TODO using DP
