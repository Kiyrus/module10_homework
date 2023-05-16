/* 

Task_2

Дана переменная x, которая может принимать любое значение.
Написать программу, которая в зависимости от типа данных x выводит в консоль сообщение вида: «x — число».

*/

const x = 10 

switch (typeof (x)) {
    case 'number':
        console.log(`${x} - it\'s a number!`)
    break
    case 'string':
        console.log(`${x} - it\'s a string!`)
    break
    case 'boolean':
        console.log(`${x} - it\'s a boolean!`)
    break
    default:
        console.log(`${x} not defined!`)
}
