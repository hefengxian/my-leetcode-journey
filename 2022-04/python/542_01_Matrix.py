from collections import deque

class Solution:

    def updateMatrix(self, mat: List[List[int]]) -> List[List[int]]:
        queue = deque()
        for i in range(len(mat)):
            for j in range(len(mat[0])):
                if mat[i][j] == 0:
                    queue.append((i, j))
                else:
                    mat[i][j] = -1
        while queue:
            i, j = queue.popleft()
            for x, y in [(i + 1, j), (i - 1, j), (i, j - 1), (i, j + 1)]:
                if 0 <= x < len(mat) and 0 <= y < len(mat[0]) and mat[x][y] == -1:
                    mat[x][y] = mat[i][j] + 1
                    queue.append((x, y))
        return mat