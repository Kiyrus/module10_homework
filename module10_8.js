/* 

Task_8

Создайте произвольный массив Map.
Получите его ключи и выведите в консоль все значения в виде «Ключ — Х, значение — Y».
Используйте шаблонные строки.

*/

let newMap = new Map([
    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry", "blue"]
])

for (keys of newMap.keys()) {
    console.log(`Key - ${keys}, Value - ${newMap.get(keys)}`)
}