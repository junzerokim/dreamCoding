'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object
// object = { key: value };

// 1. Literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructer' syntax

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const cos = {
  name: 'cos',
  age: 29
};
print(cos);

// with JavaScript magic (dynamically typed language)
// can add properties later
cos.hasJob = true;
console.log(cos.hasJob);

// can delete properties later
delete cos.hasJob;
console.log(cos.hasJob);

// 2. Computed properties(계산된)
// key should be always string
console.log(cos.name);
console.log(cos['name']);
cos['hasJob'] = true;
console.log(cos.hasJob);

function printValue(obj, key) {
  console.log(obj[key]);
}

printValue(cos, 'name');
printValue(cos, 'age');

// 3. Property value shorhand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('cos', 29);
console.log(person4);

// 4. Constructor function
function Person(name, age) {
  // this = {};
  this.name = name;
  this.age = age;
  // return this;
}

// 5. in operator: property existence check (key in obj)
console.log('name' in cos);
console.log('age' in cos);
console.log('randeom' in cos);
console.log(cos.random);
console.log(cos.random);

// 6. for..in vs for..of
// for (key in obj) *여기서 key는 함수가 아니다.
console.clear();
for (key in cos) {
  console.log(key);
}

// for (value of iterable) *여기서도 마찬가지로 value는 함수가 아니다.
const array = [1, 2, 3, 4, 5];
for (value of array) {
  console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = { name: 'cos', age: '29'};
const user2 = user;
user2.name = 'coder';
console.log(user);

// old way
const user3 = {};
for (key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = {};
Object.assign(user4, user);
console.log(user4);