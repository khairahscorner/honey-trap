var name = 'Alfred';
var age = 47;
 
const greet = (arr, ...others) => {
  console.log(arr);
  console.log(others);
}
greet`My name ${name}. I'm ${age} years old.`;

// const people = [
//   {name: 'Alfred', age: 47},
//   {name: 'George', age: 27},
//   {name: 'Regina', age: 31},
//   {name: 'Trisha', age: 30}
// ]
// const greet = (arr, n, a) => {
//   console.log(arr[0] + n + arr[1] + a + arr[2]);
// }
// people.forEach((p) => {
//   greet`Woah, ${p.name} is ${p.age}?`;
// });