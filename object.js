// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object

const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructer' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const cos = {
  name: 'cos',
  age: 4
};

print(cos);

cos.hasJob = true;
console.log(cos.hasJob);

delete cos.hasJob;
console.log(cos.hasJob);

console.log('hello');