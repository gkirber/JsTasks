/** ЗАДАЧА 58 - Удаление свойств объекта
 *
 * 1. Используйте деструктуризацию объекта вместе с rest опертором,
 * чтобы быстро удалить определенные свойства из объекта.
 *
 * 2. Убедитесь, что переменные, которые будут использоваться для деструктуризации удаленных свойств,
 * не будут доступны после операции деструктуризации.
 */

let person = {
  _id: '5ad8cefcc0971792dacb3f1f',
  index: 4,
  processed: false,
  cart: ['item1', 'item2', 'item3'],
  email: 'slarsen@test.com',
  name: 'Samanta Larsen',
  cartId: 435,
}

// Через видалення
// delete person._id
// delete person.processed
// delete person.cart


// Використовуємо деструктуризацію та rest-оператор
const { _id, processed, cart, ...updatedPerson } = person;

console.log(updatedPerson)
/*
{
  index: 4,
  email: "slarsen@test.com",
  name: "Samanta Larsen",
  cartId: 435
}
*/
