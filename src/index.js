
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    if (matrix === undefined) {
        return result;
    }
    for (let i = 0; i < matrix.length; i++) {
        if ((i + 1) % 2 === 0) {
            matrix[i].reverse();
        }       
        result = result.concat(matrix[i])
    }
  return result;
}
