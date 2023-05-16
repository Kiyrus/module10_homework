/* 

Task_7

Дан массив.
Нужно вывести в консоль количество чётных и нечётных элементов в массиве.
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее.

*/

const someArray = [0, 0, 5, 7, 9, 4, 6, 8, null]

const oddEven = (someArray) => {
    let even = 0
    let odd = 0
    let zero = 0
    
    someArray.forEach(el => {
    if (typeof el === 'number') {
        if (el === 0) {
            zero += 1
        } else if (el % 2 === 0) {
            even += 1
        } else {
            odd += 1
        }
    } 
    })
    console.log(`Кол-во четных: ${even}`)
    console.log(`Кол-во нечетных: ${odd}`)
    console.log(`Кол-во нолей: ${zero}`)
}
oddEven(someArray)