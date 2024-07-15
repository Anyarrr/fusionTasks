const w = 3;
const h = 3;

function matrix(w, h){
let result = Array.from({ length: w },() => Array(w).fill(0));
  return result;
}
console.log(matrix(w, h));
