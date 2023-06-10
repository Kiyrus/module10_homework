/* 

Task_5

Дан произвольный массив. 
Необходимо вывести количество элементов массива, затем перебрать его и вывести в консоль каждый элемент массива.

*/


let arr = ["One", "Two", "Three", "Four", "Five", "Six"];

console.log("Number of elements - " + arr.length);
arr.forEach(function(item) {
  console.log(item);
});
