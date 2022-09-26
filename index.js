#!usr/bin/node
const numbers = [1, 2, 3]
//console.log(numbers);

numbers.push(5, 6)
//console.log(numbers);

numbers.unshift(0)
console.log(numbers);

numbers.slice(3, 'a', 'b');
console.log(numbers);