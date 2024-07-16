// let name = 'Anna';
// console.log((`Hello ${name}`));

// let user = prompt('whot is you name?');
// console.log(`my name is ${user}`);

// let value = true;
// console.log(typeof value);

// value = Number(value);
// console.log(typeof value);

// console.log('6' / '3');

// let num = '458';
// num = Number(num);
// console.log(typeof num);

// let x = 5, y = 3;
// console.log(x - y);

// console.log(5 % 2);

// console.log(5 ** 2);

// let string = 'моя';
// console.log(typeof string);

// let cum = 2;
// cum++;
// console.log(cum);

// let a = Number(prompt("Первое число?", 1));
// let b = Number(prompt("Первое число?", 1));

// console.log(a + b);

// let result = 5 == 4;
// console.log(result);

// console.log('2' > 1);
// console.log('01' == 1);

// let name = +prompt('введи число', '');
// if(name >  0){
//   console.log(0);
// }else if(name < 0){
//   console.log(-1);
// }else if(name == 0){
//   console.log(0);
// }


// let value = prompt('Введите число', 0);

// if (value > 0) {
//   console.log( 1 );
// } else if (value < 0) {
//   console.log( -1 );
// } else {
//   console.log( 0 );
// }
 

// let user =[{name:'Anna',age:20,}];
// // for(let i = 0;i < user.length;i++){
// //   console.log(user[i]);
// // }

// user.forEach(function(person, index, arr){
//   console.log(person);
//   console.log(index);


// })

let user = {
  name:'dima',
  age:28,
}
for(let key in user){
  console.log(key);
  console.log(user[key]);
}