console.log('es6 feature');

// - let
// - const
// - arrow function
// const sum = (value1, value2) => {
//   return value1 + value2;
// }
const print = (msg) => console.log(msg);
// print(sum(1, 2));

// - class
class Person{
  constructor(name) {
    this.name = name;
  }
  display() {
    print(this.name);
  }
}
class Student extends Person{
  constructor(name, score) {
    super(name);
    this.score = score;
  }
  display() {
    super.display();
    print(`score: ${this.score}`);
  }
}
const person = new Person('pheaktra');
// person.display();
const student = new Student('pheaktra', 100);
// student.display();

// - module
// const mod = require('./module.js')
// import { add } from './module.js'
// print(add(2,3));

// - default function
const greetings = (name, message='hello') => print(`${message} ${name}`);
// greetings('pheaktra');
// greetings('pheak', 'hi');

// - rest/spread operators
// multi arguments
function sum(...numbers) {
  let total = 0;
  for (const n of numbers) {
    total += n;
  }
  return total;
}
// print(sum(1,2,3,4));

// concat array
const a = [1,2,3,4];
const b = [1,2,3, ...a,3,4,5];
// print(b);

// - array/object destructuring
const [first, second] = [1,4,5];
// console.log(first, second);
const {name, score} = {name: 'dara', score: 90};
// console.log(name, score);

// - promise, then, catch

