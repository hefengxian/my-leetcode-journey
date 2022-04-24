function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    // return floodFillBFS(image, sr, sc, newColor)
    return floodFillDFS(image, sr, sc, newColor)
}

function floodFillBFS(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const oldColor = image[sr][sc]
    if (oldColor === newColor) {
        return image
    }
    const r = image.length
    const c = image[0].length
    const stack = [{x: sr, y: sc}]
    while (stack.length > 0) {
        const {x, y} = stack.pop()
        if (image[x][y] == oldColor) {
            image[x][y] = newColor
            const dirs = [
                {x: x - 1, y: y},
                {x: x + 1, y: y},
                {x: x, y: y - 1},
                {x: x, y: y + 1},
            ]
            for (let {x, y} of dirs) {
                if (x >= 0 && x < r && y >= 0 && y < c) {
                    stack.push({x, y})
                }
            }
        }
    }
    return image
}

function floodFillDFS(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const oldColor = image[sr][sc]
    if (oldColor === newColor) {
        return image
    }
    const r = image.length
    const c = image[0].length
    function dfs(x: number, y: number) {
        if (x >= 0 && x < r && y >= 0 && y < c && image[x][y] === oldColor) {
            image[x][y] = newColor
            dfs(x - 1, y)
            dfs(x + 1, y)
            dfs(x, y - 1)
            dfs(x, y + 1)
        }
    }
    dfs(sr, sc)
    return image
}