/** ЗАДАЧА 40 - Конвертация JSON в JavaScript объекты
 *
 * 1. Конвертируйте массив JSON объектов в массив объектов JavaScript
 *
 * 2. Выведите в консоль результирующий массив
 *
 * 3. Выведите в консоль "postId" второго объекта
 *
 * 4. Выведите в консоль "commentsQuantity" последнего объекта
 */

const postsJSON = [
  '{"postId":1355,"commentsQuantity":5}',
  '{"postId":5131,"commentsQuantity":13}',
  '{"postId":6134,"commentsQuantity":2}',
  '{"postId":2351,"commentsQuantity":8}',
]

// Конвертируем JSON в объекты JavaScript
const posts = postsJSON.map(post => JSON.parse(post))

// Выводим результирующий масив
console.log(posts)

// Выводим 'postId' второго объекта
console.log(posts[1].postId)

// Выводим 'commentsQuantity' последнего объекта
console.log(posts[posts.length - 1].commentsQuantity)
