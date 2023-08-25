/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let searchMatrix = function(matrix, target) {
  let lastIndex = matrix[0].length - 1;

  for (let i = 0; i < matrix.length; i++) {

    if (target <= matrix[i][lastIndex]) {
      return matrix[i].includes(target);
    }
  }
  return false;
};