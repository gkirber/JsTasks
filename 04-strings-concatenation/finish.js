/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

//V.1
const myName = 'Георгий'
const mySurname = 'Кирбер'
const myProfession = 'программист'

const summary1 = `Меня зовут ${myName} ${mySurname} и я ${myProfession}`

console.log(summary1)

//V.2
const summary2 = 'Меня зовут ' + myName + ' ' + mySurname + ' и я ' + myProfession

console.log(summary2)

