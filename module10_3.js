/*

Task_3

Дана строка. Необходимо вывести в консоль перевёрнутый вариант.
Например, "Hello" -> "olleH".

*/

let str = prompt("Enter the word:")
let stringRevers = str.split('').reverse().join('');

console.log(stringRevers);
