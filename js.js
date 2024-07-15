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
console.log(5);