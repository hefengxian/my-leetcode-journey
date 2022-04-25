function updateMatrix(mat: number[][]): number[][] {
    
    // findout all cells are 0
    // from those 0 cells to check their neighbors
    
    const queue: {r: number, c: number}[] = []
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[0].length; c++) {
            if (mat[r][c] === 0) {
                queue.push({r, c})
            } else {
                mat[r][c] = -1
            }
        }
    }
    while (queue.length > 0) {
        const {r, c} = queue.shift()
        const dirs = [
            {x: r - 1, y: c},
            {x: r + 1, y: c},
            {x: r, y: c - 1},
            {x: r, y: c + 1},
        ]
        for (let {x, y} of dirs) {
            if (x >= 0 && x < mat.length && y >= 0 && y < mat[0].length && mat[x][y] == -1) {
                mat[x][y] = mat[r][c] + 1
                queue.push({r: x, c: y})
            }
        }
        
    }
    return mat
}