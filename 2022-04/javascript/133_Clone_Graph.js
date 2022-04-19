
class Node {
    constructor(val=0, neighbors=[]) {
        this.val = val
        this.neighbors = neighbors
    }
}

/**
 * @param {Node | null} node 
 * @return {Node | null}
 */
 function cloneGraph(node) {
    //  return cloneGraphBFS(node)
    //  return cloneGraphDFSRecursively(node)
     return cloneGraphDFSIteratively(node)
 }


/**
 * @param {Node | null} node 
 * @return {Node | null}
 */
function cloneGraphBFS(node) {
    if (!node) return node
    const map = new Map()
    const queue = [node]
    while (queue.length) {
        const n = queue.shift()     // O(n)
        if (!map.has(n)) {
            map.set(n, new Node(n.val))
        }
        for (let neighbor of n.neighbors) {
            if (!map.has(neighbor)) {
                queue.push(neighbor)
                map.set(neighbor, new Node(neighbor.val))
            }
            map.get(n).neighbors.push(map.get(neighbor))
        }
    }
    return map.get(node)
}


/**
 * @param {Node | null} node 
 * @return {Node | null}
 */
 function cloneGraphDFSRecursively(node) {
    if (!node) return node
    const map = new Map()
    const dfs = node => {
        if (map.has(node)) {
            return map.get(node)
        }
        const nodeCopy = new Node(node.val)
        map.set(node, nodeCopy)
        for (let neighbor of node.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, dfs(neighbor))
            }
            nodeCopy.neighbors.push(map.get(neighbor))
        }
        return nodeCopy
    }
    return dfs(node)
}


/**
 * @param {Node | null} node 
 * @return {Node | null}
 */
 function cloneGraphDFSIteratively(node) {
    if (!node) return node
    const map = new Map()
    const stack = [node]
    while (stack.length) {
        const n = stack.pop()       // O(1)
        if (!map.has(n)) {
            map.set(n, new Node(n.val))
        }
        for (let neighbor of n.neighbors) {
            if (!map.has(neighbor)) {
                stack.push(neighbor)
                map.set(neighbor, new Node(neighbor.val))
            }
            map.get(n).neighbors.push(map.get(neighbor))
        }
    }
    return map.get(node)
}