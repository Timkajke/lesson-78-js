// Каррирование (currying) - в функциональном программировании.
// Это преобразование функции с множеством аргументов в набор вложенных
// функций с одним аргументом. При вызове каррированной функции с передачей
// ей одного аргумента, она возвращает новую функцию, которая ожидает
// поступления следующего аргумента

const data = [
    { name: 'Drink', price: 3.12 },
    { name: 'Food', price: 14.1 },
    { name: 'Drink', price: 5.01 },
];

// const drinksGreaterThanFour = obj => obj.name === 'Drink' && obj.price > 4;
// const result = data.filter(drinksGreaterThanFour);  // такой вариант работает
// console.log(result);

// [
//     {
//         "name": "Drink",
//         "price": 5.01
//     }
// ]

// const drinksGreaterThan = (obj, cost) => obj.name === 'Drink' && obj.price > cost;
// const result = data.filter(drinksGreaterThan(data, 3)); // НЕ РАБОТАЕТ! ВЫДАЁТ ОШИБКУ

// для решения подобной задачи можно использовать КАРРИРОВАНИЕ

// const drinksGreaterThan = cost => obj => obj.name === 'Drink' && obj.price > cost;
// const result = data.filter(drinksGreaterThan(4));
// console.log(result);

// const createIncrementor = n => num => n + num;
// const addOne = createIncrementor(1);
// const addTen = createIncrementor(10);
// console.log(addOne(10)); // 11
// console.log(addTen(40)); // 50