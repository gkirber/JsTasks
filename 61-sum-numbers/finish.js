/** ЗАДАЧА 61 - Сумма чисел
 *
 * 1. Создайте функцию "sumNumbers", которая будет суммировать все переданные ей аргументы.
 * Количество аргументов неизвестно
 *
 * 2. Используйте console.log внутри функции для вывода результата
 *
 * 3. Также верните эту сумму как результат функции
 */


// Вариант 1
function sumNumbers() {
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log('Sumo of all arguments is ', sum)
    return sum
}


// Вариант 2
// const sumNumbers = (...numbers) => {
//     const sum = numbers.reduce((acc, num) => acc + num, 0)
//     console.log(sum)
//     return sum
// }


sumNumbers(1, 3) // 4
sumNumbers(10, 20, 5) // 35
sumNumbers(2, 5, 80, 1, 10, 12) // 110
