from collections import deque

class Node:
    def __init__(self, val=0, neighbors=[]):
        self.val = val
        self.neighbors = neighbors


class Solution:

    def cloneGraph(self, node: Node) -> Node:
        # return self.cloneGraphBFS(node)
        # return self.cloneGraphDFSRecursively(node)
        return self.cloneGraphDFSIteratively(node)

    def cloneGraphBFS(self, node: Node) -> Node:
        if not node: return node
        map = {}
        queue = deque([node])
        while queue:
            n = queue.popleft()
            if n not in map:
                map[n] = Node(n.val)
            for neighbor in n.neighbors:
                if neighbor not in map:
                    map[neighbor] = Node(neighbor.val)
                    queue.append(neighbor)
                map[n].neighbors.append(map[neighbor])
        return map[node]

    def cloneGraphDFSRecursively(self, node: Node) -> Node:
        if not node: return node
        map = {}
        def dfs(node: Node) -> Node:
            if node in map:
                return map.get(node)
            node_copy = Node(node.val)
            map[node] = node_copy
            for neighbor in node.neighbors:
                if neighbor not in map:
                    map[neighbor] = dfs(neighbor)
                node_copy.neighbors.append(map.get(neighbor))
            return node_copy

        return dfs(node)

    def cloneGraphDFSIteratively(self, node: Node) -> Node:
        if not node: return node

        map = {}
        stack = [node]
        while stack:
            n = stack.pop()
            if n not in map:
                map[n] = Node(n.val)
            for neighbor in n.neighbors:
                if neighbor not in map:
                    map[neighbor] = Node(neighbor.val)
                    stack.append(neighbor)
                map[n].neighbors.append(map[neighbor])
        return map[node]