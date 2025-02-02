/** ЗАДАЧА 53 - Сокращенное написание свойств объектов
 * 
 * 1. Исправьте все ошибки в коде.
 * 
 * 2. Измените объект, возвращаемый функцией "photosGallery", используя:
 *  - Сокращенные имена свойств
 *  - Сокращенные имена методов
 *  - Также нужно изменить одно свойство объекта
 * и сделать его вычисляемым свойством
 * 
 * 3. Сообщения в консоли должны быть точно такими же, 
 * как и в конце этой задачи
 */

const photosGallery = (title, dimensions, date) => {
  return {
    title, // Сокращенное имя свойства
    [dimensions]: true, // Вычисляемое свойство
    info() { // Сокращенное имя метода
      console.log(`Фото ${title} имеет разрешение ${dimensions}`)
    },
    publishInfo() { // Сокращенное имя метода
      console.log(
          `Фото было опубликовано ${Math.floor(
              (new Date().getTime() - date.getTime()) / 1000
          )} секунды назад`
      );
    },
    date, // Сокращенное имя свойства
  }
}

// Создаём объект с фотографией
const myDogPhoto = photosGallery(
  "My dog",
  "1920x1080",
  new Date()
)

// Тестовые переменные для вычисляемого свойства
const testDimension1 = "1920x1080"
const testDimension2 = "1080x720"

// Вывод информации о фото
myDogPhoto.info()
/* Фото "My dog" имеет разрешение 1920x1080 */

// Вывод информации о публикации через 2 секунды
setTimeout(() => myDogPhoto.publishInfo(), 2000)
/* Фото "My dog" было опубликовано 2 секунды назад */

/* ВОПРОС: Почему метод "publishInfo" все еще имеет доступ 
к параметрам функции "photosGallery" (например "date")? */

// Проверка вычисляемого свойства
console.log(myDogPhoto[testDimension1]) // true
console.log(myDogPhoto[testDimension2]) // undefined
