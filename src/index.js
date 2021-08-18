 
module.exports = function towelSort (matrix) {
  if (matrix === [] || !matrix) {return []}
    newMatrix = [];
    help = [];
    for (let i = 1; i < matrix.length; i += 2) {
        matrix[i].reverse();
    }
    for (let i = 0; i < matrix.length; i++)
        for (let j = 0; j < matrix[i].length; j++) {
            newMatrix.push(matrix[i][j]);
        }
        return newMatrix
}
