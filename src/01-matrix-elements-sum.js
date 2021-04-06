/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  let key = false;
  if (/0/.test(matrix)) {
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = matrix.length - 1; j >= 0; j--) {
        if (matrix[j][i] === 0) {
          key = true;
        }
        if (key) {
          sum += matrix[j][i];
        }
      }
      key = false;
    }
  } else {
    for (let i = 0; i < matrix[0].length; i++) {
      for (let j = matrix.length - 1; j >= 0; j--) {
        sum += matrix[j][i];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
