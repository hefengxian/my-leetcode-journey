function canVisitAllRooms(rooms: number[][]): boolean {
    // DFS Iteratively
    return dfsIteratively(rooms)
    // DFS Recursively
    return dfsRecursively(rooms)
    // BFS
    return bfs(rooms)
}

function dfsIteratively(rooms: number[][]): boolean {
    const visited = new Set<number>()
    const stack = [0]
    while (stack.length > 0) {
        const rn = stack.pop()
        if (!visited.has(rn)) {
            visited.add(rn)
            stack.push(...rooms[rn])
        }
    }
    return rooms.length === visited.size
}


function dfsRecursively(rooms: number[][]): boolean {
    function dfs(rn: number) {
        if (!visited.has(rn)) {
            visited.add(rn)
            for (let i of rooms[rn]) {
                dfs(i)
            }
        }
    }
    const visited = new Set<number>()
    dfs(0)
    return rooms.length === visited.size
}


function bfs(rooms: number[][]): boolean {
    const visited = new Set<number>()
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