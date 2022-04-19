// ts-ignore
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     neighbors: Node[]
 *     constructor(val?: number, neighbors?: Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 */

// 这个 Node 和 DOM 定义的 Node 有冲突
class Node {
    val: number
    neighbors: Node[]
    constructor(val?: number, neighbors?: Node[]) {
        this.val = (val === undefined ? 0 : val)
        this.neighbors = (neighbors === undefined ? [] : neighbors)
    }
}

function cloneGraphBFS(node: Node | null): Node | null {
    if (!node) return node

    const map = new Map<Node, Node>()
    const queue = [node]
    while (queue.length > 0) {
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

function cloneGraphDFSRecursively(node: Node | null): Node | null {
    if (!node) return node
    const map = new Map<Node, Node>()
    function dfs(node: Node): Node {
        if (map.has(node)) {
            return map.get(node)
        }
        const nodeCopy = new Node(node.val)
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

function cloneGraphDFSIteratively(node: Node | null): Node | null {
    if (!node) return node

    const map = new Map<Node, Node>()
    const stack = [node]
    while (stack.length) {
        const n = stack.pop()
        if (!map.has(n)) {
            map.set(n, new Node(n.val))
        }
        for (let neighbor of n.neighbors) {
            if (!map.has(neighbor)) {
                map.set(neighbor, new Node(neighbor.val))
                stack.push(neighbor)
            }
            map.get(n).neighbors.push(map.get(neighbor))
        }
    }
    return map.get(node)
}

// 跳过 TS 全局检查 Node
export {}