/** ЗАДАЧА 60 - Модифицированный метод push для массивов
 *
 * 1. Создайте новый класс "CustomArray", который должен расширять встроенный "Array"
 *
 * 2. Добавьте один пользовательский метод "customPush" в новый класс.
 * Этот метод будет иметь один параметр "newElement".
 *
 * При вызове этого метода необходимо выполнить следующие действия:
 *  - Добавить новый элемент в существующий массив
 *  (не используйте для этого метод "push")
 *  - Изменить свойство "length" массива (увеличить его на 1)
 *  - Вывести в консоль следующую строку:
 * "Новый элемент <newElement> был только что добавлен в массив"
 *
 * 3. Создайте экземпляр нового класса "CustomArray"
 * и протестируйте новый метод "customPush" и сравните его с "push"
 *
 * 4. Что произойдет, если имя пользовательского метода
 * в классе "CustomArray" также будет "push" вместо "customPush"?
 * Попробуйте это.
 */


class CustomArray extends Array {
    //Додаємо власний метод customPush
    customPush(newElement) {
        this[this.length] = newElement //Додаємо новий елемент у масив
        this.length++ //Збільшуємо довжину масиву вручну

        console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
    }
}

//Тестуємо клас
const myArray = new CustomArray(1, 2, 3)
console.log(myArray) // [1, 2, 3]

myArray.customPush(4) //Новый элемент 4 был только что добавлен в массив
console.log(myArray) // [1, 2, 3, 4]

myArray.customPush(5) //Новый элемент 5 был только что добавлен в массив
console.log(myArray) // [1, 2, 3, 4, 5]

// Перевіряємо стандартний push()
myArray.push(6)
console.log(myArray) // [1, 2, 3, 4, 5, 6]

// Що буде, якщо ми назвемо метод "push" замість "customPush"?
class CustomArrayWithPush extends Array {
    push(newElement) {
        this[this.length] = newElement // Додаємо елемент
        this.length++ // Збільшуємо довжину масиву

        console.log(`Новый элемент ${newElement} был только что добавлен в массив`)
    }
}

const myArray2 = new CustomArrayWithPush(10, 20, 30)
console.log(myArray2) // [10, 20, 30]

myArray2.push(40) // Викличеться наш метод, а не стандартний push
console.log(myArray2) // [10, 20, 30, 40]