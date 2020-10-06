
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix !== undefined?matrix.map((element, index)=>{return index % 2 == 1? element.reverse() : element}).flat() : []
}
