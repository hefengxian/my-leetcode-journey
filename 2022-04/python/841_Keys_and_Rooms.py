class Solution:

    def canVisitAllRooms(self, rooms: List[List[int]]) -> bool:
        # DFS Iteratively
        return self.dfs_iteratively(rooms)
        # DFS Recursively
        return self.dfs_recursively(rooms)
        # BFS
        return self.bfs(rooms)

    def dfs_iteratively(self, rooms: List[List[int]]) -> bool:
        visited = set()
        stack = [0]
        while stack:
            rn = stack.pop()
            if rn not in visited:
                visited.add(rn)
                stack += rooms[rn]
        return len(rooms) == len(visited)

    def dfs_recursively(self, rooms: List[List[int]]) -> bool:
        visited = set()
        def dfs(rn: int) -> None:
            if rn not in visited:
                visited.add(rn)
                for i in rooms[rn]:
                    dfs(i)
        dfs(0)
        return len(visited) == len(rooms)

    def bfs(self, rooms: List[List[int]]) -> bool:
        from collections import deque
        visited = set()
        queue = deque([0])
        while queue:
            rn = queue.popleft()
            if rn not in visited:
                visited.add(rn)
                queue += rooms[rn]
        return len(visited) == len(rooms)