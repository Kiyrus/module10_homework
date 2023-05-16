/* 

Task_1

Напишите программу, которая работала бы следующим образом: в prompt вводится значение.
С помощью унарного плюса (арифметический оператор) необходимо преобразовать его в число,
затем проверить с помощью typeof,принадлежит ли оно к множеству Number.
Если это число, то вывести в консоль чётное оно или нечётное.
Если передано не число, выведите: «Упс, кажется, вы ошиблись».
*NaN, хоть и относится к типу Number, числом не является. Добавьте отдельную проверку для этого значения.

*/

const inputData = prompt('Please enter a value.')
const number = +inputData

if (typeof number == 'number' && Number.isNaN(number)) {
    console.log('Oops, it seems you made a mistake!')
    alert('Oops, it seems you made a mistake!')
} 
else if (number % 2 === 0) {
    console.log(number + ' - it\'s an even number!')
    alert(number + ' - it\'s an even number!')
} else {
    console.log(number + ' - it\'s an odd number!')
    alert(number + ' - it\'s an odd number!')
}