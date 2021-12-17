// Q1. make a string out of an array
{
const fruits = ['apple', 'banana', 'orange'];
const result = fruits.join(' and ');
console.log(result); // apple and banana and orange
}

// Q2. make ana array out of a string
{
const fruits = '🍎,🥝,🍌,🍒';
const result = fruits.split(',');
console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array); // 배열 자체도 reverse된다.
}

// Q4. make new array without the first two elements
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5); // splice는 배열 자체를 수정, slice는 원하는 부분만 return
  console.log(result);
  console.log(array);
}