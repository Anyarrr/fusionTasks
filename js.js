///////ЗАДАЧА 2

// let fruits = ['апельсин', 'аскорбин', 'мандарин', 'дыня'];

// function summer(one, two) {
//   return (one.at(0) == two.at(0) && one.at(-1) == two.at(-1));
// }

// function solution(arr) {
//   let twoFruits = [];
//   for (let i = 0; i < arr.length-1; i++) {
//     if (summer(arr[i], arr[i + 1])) {
//       twoFruits.push('true');
//     } else {
//       twoFruits.push('false');
//     }
//   }
//   return twoFruits;
// }

// console.log(solution(fruits));

//////ЗАДАЧА 1

function pow(keys){
  if(Array.isArray(keys)){
    return keys.map(item => pow(item));
  }else if(typeof keys === 'object' && keys !== null){
    let tasks = {};
for(let key in keys){
  tasks[key] = pow(keys[key]);
}
return tasks;
}else{
return keys;
}
}

const obj = { a: 1, b: [2, { c: 3 }] };
console.log((pow(obj)));


///////////////////ЗАДАЧА 3
const w = 3;//ширина
const h = 3;//высота  

function matrix(w, h){
    let result = new Array(h).fill().map(() => new Array(w).fill(""));
    let couter = 1;//счетчик
    let startCol = 0;//начинаем с 0 заполнять оbj
    let endCol = w - 1;//конец первого массива ,-1 для того чтобы получилась ширина в 3 элетента с 0 индексом а не 4 элемента
    let startRow = 0;//
    let endRow = h - 1;//для того чтобы не изменить первый элемент не пошел на 1

    while(startCol <= endCol && startRow <= endRow) {//первый массив          startRow   >        endCol
        for(let i = startCol; i <= endCol; i++){
            result[startRow][i] = couter;          //                          startCol      <      endRow
            couter++;
        }
        startRow++;

        for(let i = startRow; i <= endRow; i++){
            result[i][endCol] = couter;
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

