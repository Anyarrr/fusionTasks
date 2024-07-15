///////ЗАДАЧА 2

let fruits = ['апельсин', 'аскорбин', 'мандарин', 'дыня'];

function summer(one, two) {
  return (one.at(0) == two.at(0) && one.at(-1) == two.at(-1));
}

function solution(arr) {
  let twoFruits = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (summer(arr[i], arr[i + 1])) {
      twoFruits.push('true');
    } else {
      twoFruits.push('false');
    }
  }
  return twoFruits;
}

console.log(solution(fruits));

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


// const w = +prompt('Ширина матрицы');//трансформируем данные из строки в число +
// const h = +prompt('Высота матрицы');

// const w = 3;
// const h = 3;

// function matrix(w, h){
//     let result = new Array(h).fill().map(() => new Array(w).fill(""));
//     let couter = 1;
//     let startCol = 0;
//     let endCol = w - 1;
//     let startRow = 0;
//     let endRow = h - 1;

//     while(startCol <= endCol && startRow <= endRow) {
//         for(let i = startCol; i <= endCol; i++){
//             result[startRow][i] = couter;
//             couter++;
//         }
//         startRow++;

//         for(let j = startRow; j <= endRow; j++){
//             result[j][endCol] = couter;
//             couter++;
//         }
//         endCol--;

//         for(let i = endCol; i >= startCol; i--){
//             result[endRow][i] = couter;
//             couter++;
//         }
//         endRow--;

//         for(let i = endRow; i >= startRow; i--){
//             result[i][startCol] = couter;
//             couter++;
//         }
//         startCol++;
//     }

//     return result;
// }
// console.log(matrix(w, h));

