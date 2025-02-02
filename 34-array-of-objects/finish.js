/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */

const cars = [
    {
        carBrand: 'Toyota',
        price: 20000,
        isAvailableForSale: true
    },
    {
        carBrand: 'BMW',
        price: 35000,
        isAvailableForSale: false
    },
    {
        carBrand: 'Audi',
        price: 27000,
        isAvailableForSale: true
    }
]

// Добавляем ещё один объект
cars.push({
    carBrand: 'Mercedes',
    price: 50000,
    isAvailableForSale: true
})

console.log(cars)