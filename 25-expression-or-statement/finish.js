/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

15  // ✅ Выражение (expression) → просто число, которое вычисляется и имеет значение.

const myObject = {  // ✅ Инструкция (statement) → объявление переменной и присвоение объекта.
  x: 10,
  y: true,
}

myObject.z = 'abc' // ✅ Выражение-инструкция (expression statement) → выражение присваивания, которое выполняет действие.

delete myObject.x // ✅ Выражение-инструкция (expression statement) → delete — оператор, который выполняет действие.

let newVariable // ✅ Инструкция (statement) → объявление переменной без присвоения значения.

newVariable = 30 + 5 // ✅ Выражение-инструкция (expression statement) → присваивание результата выражения.

console.log(newVariable) // ✅ Выражение-инструкция (expression statement) → вызов функции console.log().

if (newVariable > 10) {
  console.log(`${newVariable} больше 10`) // ✅ Инструкция (statement) → if — управляющая конструкция (не выражение). Внутри выполняется выражение-инструкция console.log(...).
}