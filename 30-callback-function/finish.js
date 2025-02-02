/** ЗАДАЧА 30 - Колбэк функция
 *
 * 1. Что будет выведено в консоль?
 * Постарайтесь ответить без запуска кода.
 *
 * 2. Нужно ли как-то исправить этот код?
 */

// Вариант 1 (удалить явное имя функции в setTimeout)
setTimeout(function () {
  console.log('Привет из функции')
}, 2000)


// Или использовать стрелочную функцию:
setTimeout(() => {
  console.log('Привет из функции')
}, 2000)


// Вариант 2 (объявить myFn перед вызовом):
function myFn() {
  console.log('Привет из функции myFn')
}

setTimeout(myFn, 2000)

myFn() // Сработает сразу, а потом еще раз через 2 сек
