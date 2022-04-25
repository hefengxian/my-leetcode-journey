/**
 * @param {number[][]} mat 
 * @return {number[][]} 
 */
function updateMatrix(mat) {
    const queue = []
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push({i, j})
            } else {
                mat[i][j] = -1
            }
        }
    }
    while (queue.length > 0) {
        const {i, j} = queue.shift()
        const dirs = [
            {x: i + 1, y: j},
            {x: i - 1, y: j},
            {x: i, y: j - 1},
            {x: i, y: j + 1},
        ]
        for (let {x, y} of dirs) {
            if (x >= 0 && x < mat.length && y >= 0 && y < mat[0].length && mat[x][y] === -1) {
                mat[x][y] = mat[i][j] + 1
                queue.push({i: x, j: y})
            }
        }
    }
    return mat
}