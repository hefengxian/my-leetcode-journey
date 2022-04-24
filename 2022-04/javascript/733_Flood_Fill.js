/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
function floodFill(image, sr, sc, newColor) {
    // return floodFillBFS(image, sr, sc, newColor)
    return floodFillDFS(image, sr, sc, newColor)
}


function floodFillBFS(image, sr, sc, newColor) {
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
                {x, y: y - 1},
                {x, y: y + 1},
                {x: x - 1, y},
                {x: x + 1, y},
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


function floodFillDFS(image, sr, sc, newColor) {
    const oldColor = image[sr][sc]
    if (oldColor === newColor) {
        return image
    }
    const r = image.length
    const c = image[0].length

    function dfs(x, y) {
        if (x >= 0 && x < r && y >= 0 && y < c && image[x][y] === oldColor) {
            image[x][y] = newColor
            dfs(x, y - 1)
            dfs(x, y + 1)
            dfs(x - 1, y)
            dfs(x + 1, y)
        }
    }
    dfs(sr, sc)
    return image
}