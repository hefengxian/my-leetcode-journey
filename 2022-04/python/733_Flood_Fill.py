class Solution:
    def floodFill(self, image: List[List[int]], sr: int, sc: int, new_color: int) -> List[List[int]]:
        return self.floodFillDFS(image, sr, sc, new_color)
        # return self.floodFillBFS(image, sr, sc, new_color)

    def floodFillDFS(self, image: List[List[int]], sr: int, sc: int, new_color: int) -> List[List[int]]:
        old_color, r, c = image[sr][sc], len(image), len(image[0])
        if old_color == new_color:
            return image
        def dfs(x: int, y: int):
            if 0 <= x < r and 0 <= y < c and image[x][y] == old_color:
                image[x][y] = new_color
                dfs(x - 1, y)
                dfs(x + 1, y)
                dfs(x, y - 1)
                dfs(x, y + 1)
        dfs(sr, sc)
        return image

    def floodFillBFS(self, image: List[List[int]], sr: int, sc: int, new_color: int) -> List[List[int]]:
        old_color, r, c = image[sr][sc], len(image), len(image[0])
        if old_color == new_color:
            return image
        stack = [(sr, sc)]
        while stack:
            x, y = stack.pop()
            if image[x][y] == old_color:
                image[x][y] = new_color
                dirs = [
                    (x - 1, y),
                    (x + 1, y),
                    (x, y - 1),
                    (x, y + 1),
                ]
                for x, y in dirs:
                    if 0 <= x < r and 0 <= y < c:
                        stack.append((x, y))
        return image