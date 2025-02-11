/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */


// Function Declaration (Оголошення функції)
function firstFunction(a, b) {
  return a + b
}

// Function Expression (Функціональний вираз)
const secondFunction = function (a, b) {
  return a + b
}

console.log(firstFunction(2, 3)) // 5
console.log(secondFunction(2, 3)) // 5

//.🚀 Function Declaration підходить для основних функцій,
// а Function Expression - для гнучкості та використання в колбеках!