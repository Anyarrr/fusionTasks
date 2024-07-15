/////////ЗАДАЧА 2

// let fruits = ['апельсин', 'аскорбин', 'мандарин', 'дыня'];

// function summer(one, two) {
//   return (one.at(0) == two.at(0) && one.at(-1) == two.at(-1));
// }

// function solution(arr) {
//   let twoFruits = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (summer(arr[i], arr[i + 1])) {
//       twoFruits.push('true');
//     } else {
//       twoFruits.push('false');
//     }
//   }
//   return twoFruits;
// }

////////ЗАДАЧА 1
// function pow(keys){
// for(let key in keys){
//     if(typeof keys[key] === 'object' && keys[key] !== null){
//         pow(keys[key]);
//     }else{
//         console.log(`${key}:${keys[key]}`);
//     }
// }
// }
// let tasks = {};
// tasks = pow(name); 

// tasks = function(obj) {
//     console.log(obj);
// };

// pow({ a: 1, b: [2, { c: 3 }] });

////////ЗАДАЧА 3

// const matrixs = [];
// for(let i = 0; i < n ; i++){
//     matrix.push([]);
// }

/////////////////////////////////Пробую создать матрицу
// const n = 3;
// const matrix = Array.from({ length: n },() => Array(n).fill(0));
// console.log(matrix);
// for(let i = 0; i < n / 2 ; i++){
//     for(let j = i; j < n-i ; j++){
//      matrix[i][j] = i; 
//     }
// }

///////////////////////////ЖЕня
// function createSpiralMatrix(N) {
//     // Создаем пустую матрицу NxN
//     let matrix = new Array(N).fill().map(() => new Array(N).fill(0));
//     // Начальные значения
//     let value = 1;
//     let top = 0, bottom = N - 1;
//     let left = 0, right = N - 1;
    
//     // Пока есть пространство для заполнения
//     while (value <= N * N) {
//     // Заполняем верхнюю строку
//     for (let i = left; i <= right; i++) {
//     matrix[top][i] = value++;
//     }
//     top++;
    
//     // Заполняем правый столбец
//     for (let i = top; i <= bottom; i++) {
//     matrix[i][right] = value++;
//     }
//     right--;
    
//     // Заполняем нижнюю строку
//     for (let i = right; i >= left; i--) {
//     matrix[bottom][i] = value++;
//     }
//     bottom--;
    
//     // Заполняем левый столбец
//     for (let i = bottom; i >= top; i--) {
//     matrix[i][left] = value++;
//     }
//     left++;
//     }
//     return matrix;
//     }

//     function printMatrix(matrix) {
//     for (let row of matrix) {
//     console.log('>>>>>', row.join(' '));
//     }
//     }
    
    
//     // Пример использования
//     let N = 3;
//     let spiralMatrix = createSpiralMatrix(N);
//     printMatrix(spiralMatrix);





// const w = +prompt('Ширина матрицы');//трансформируем данные из строки в число +
// const h = +prompt('Высота матрицы');

const w = 3;
const h = 3;

function matrix(w, h){
    let result = new Array(h).fill().map(() => new Array(w).fill(""));
    let couter = 1;
    let startCol = 0;
    let endCol = w - 1;
    let startRow = 0;
    let endRow = h - 1;

    while(startCol <= endCol && startRow <= endRow) {
        for(let i = startCol; i <= endCol; i++){
            result[startRow][i] = couter;
            couter++;
        }
        startRow++;

        for(let j = startRow; j <= endRow; j++){
            result[j][endCol] = couter;
            couter++;
        }
        endCol--;

        for(let i = endCol; i >= startCol; i--){
            result[endRow][i] = couter;
            couter++;
        }
        endRow--;

        for(let i = endRow; i >= startRow; i--){
            result[i][startCol] = couter;
            couter++;
        }
        startCol++;
    }

    return result;
}
console.log(matrix(w, h));

// [
//     [2, 3, 4, 5, 9, 5],
//     [23132, 654654 ,65454],
//     [223, 8464, 665465],
// ]