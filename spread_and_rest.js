// В ES6 появился оператор ...
// в зависимости от контекста использования он называется или spread или rest

// spread - разделитель
// spread базовые примеры:
// Пример 1. Создание копии массива

const students = ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"];
const copyStudents = [...students]; // используется вместо slice() и работает как slice(). Создаётся КОПИЯ
console.log(copyStudents);

// Пример 2. Объединение массивов 
const concatStudents = [...students, ...copyStudents]; // используется вместо concat()
console.log(concatStudents);

// Пример 3. Распределение параметров функции
const log = (param1, param2, param3) => document.write(`<h1>${param1} -- ${param2} -- ${param3}</h1>`);

log(...['Cristiano', 'Ronaldo', 'BEST', 'STRIKER']); // STRIKER в аргументы функции не попадет



// rest - остаток
// Базовые примеры с rest:
// Пример 1. Распределение параметров функции

const logRest = (param1, param2, param3, ...rest) => 
document.write(`<h1>${param1} -- ${param2} -- ${param3} ** ${rest.join(' -- ')} </h1>`);

logRest(...['Cristiano', 'Ronaldo', 'BEST', 'STRIKER', 'BOBIK']); // STRIKER в аргументы функции ПОПАДЁТ

// Способы применения ...
// Пример 1. Добавление свойств

const user = { id: 1, name: 'Alexey'};
const userWithPass = {...user, password: '1234'};
console.log(userWithPass);

// Пример 2. Удаление свойств объекта (НЕ РЕКОМЕНДОВАННЫЙ способ для "сложных" объектов,
// т.е. у которых под ключами лежат геттеры/сеттеры или дескрипторы )

const noPassword = ({password, ...rest}) => rest;
const noPasswordUser = noPassword(userWithPass);
console.log(noPasswordUser); // { id: 1, name: 'Alexey'};

// Пример 3. Динамическое удаление свойств объекта
const removeKeys = key => ({ [key]: _, ...rest }) => rest;

/* function removeKeys(key) {
    return function({ [key]: undefined, ...rest }) {
        return rest;
    }
} */

const cutUser = removeKeys('name');
console.log(cutUser(user)); 

// Пример 4. Переименование значений

const user2 = {
    ID: 500,
    name: 'Aleksey',
};
const renamed = ({ ID, ...rest }) => ({ identificator: ID, ...rest });
console.log(renamed(user2));

// Пример 5. Добавление условных свойств
const address = '';
const userWithAddress = {
    ...user,
    phone: '+73242342323',
    ...(address && { address }) // в случае, если address эквивалентен true 
    // то подставится значение из address
    // (если строка пустая, то false) ничего не подставится
};
console.log(userWithAddress);







