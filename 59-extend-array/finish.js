/** ЗАДАЧА 59 - Расширение массивов
 *
 * 1. Создайте новый класс "ExtendedArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте в новый класс два пользовательских метода:
 *  - "sum" - он должен возвращать сумму всех элементов массива
 *  - "onlyNumbers" - должен возвращать новый массив,
 * который будет содержать только числа из исходного массива
 *
 * 3. Создайте несколько экземпляров нового класса "ExtendedArray"
 * и протестируйте оба метода "sum" и "onlyNumbers".
 *
 * 4. Убедитесь, что остальные методы массивов такие,
 * как "forEach", "map" также доступны
 */

// Вариант 1
class ExtendedArray extends Array {
    sum() {
        return this.reduce((sum, num) => sum + num, 0)
    }

    onlyNumbers() {
        return this.filter((el))
    }
}

const myExtendedArray = new ExtendedArray(10, 4, 5)
console.log(myExtendedArray)

console.log(myExtendedArray.sum())

const myExtendedArray2 = new ExtendedArray('abc', 5, true, 25)
console.log(myExtendedArray2.onlyNumbers())

myExtendedArray2.forEach((el) => console.log(el))

// Array instances don't have access to methods sum and onlyNumbers
const myArray = [1, 2, 3]
myArray.sum()


// Вариант 2
// class ExtendedArray extends Array {
//     // Метод для підрахунку суми чисел у масиві
//     sum() {
//         return this.reduce((acc, item) => (typeof item === 'number' ? acc + item : acc), 0);
//     }
//
//     // Метод для отримання тільки числових значень
//     onlyNumbers() {
//         return this.filter(item => typeof item === 'number');
//     }
// }

    // Тестуємо клас

    const myArray = new ExtendedArray(10, 'hello', 20, 30, true, 40, 'world')

    console.log(myArray.sum()) // 100 (10 + 20 + 30 + 40)

    console.log(myArray.onlyNumbers()) // [10, 20, 30, 40]

    // Перевіряємо, чи доступні стандартні методи масиву
    console.log(myArray.map(num => (typeof  num === 'number' ? num * 2 : num)))
    // [20, 'hello', 40, 60, true, 80, 'world']

    myArray.forEach(item => console.log(item))
    // Виведе кожен елемент масиву