/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function canVisitAllRooms(rooms) {
    // DFS Iteratively
    return dfsIteratively(rooms)
    // DFS Recursively
    // return dfsRecursively(rooms)
    // BFS
    // return bfs(rooms)
}

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function dfsIteratively(rooms) {
    const visited = new Set()
    const stack = [0]``
    while (stack.length > 0) {
        const rn = stack.pop()
        if (!visited.has(rn)) {
            visited.add(rn)
            stack.push(...rooms[rn])
        }
    }
    return rooms.length === visited.size
}

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function dfsRecursively(rooms) {
    const visited = new Set()

    function dfs(rn) {
        if (!visited.has(rn)) {
            visited.add(rn)
            for (let i of rooms[rn]) {
                dfs(i)
            }
        }
    }
    dfs(0)
    return rooms.length === visited.size
}

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
function bfs(rooms) {
    const visited = new Set()
    const queue = [0]
    while (queue.length > 0) {
        const rn = queue.shift()
        if (!visited.has(rn)) {
            visited.add(rn)
            queue.push(...rooms[rn])
        }
    }
    return rooms.length === visited.size
}