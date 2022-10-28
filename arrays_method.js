const students = ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"];

// pop() - удаляет последний элемент массива и возвращает удаленный элемент,
// при этом изменяя исходный массив

console.log(students.pop()); // Глеб
console.log(students); // ["Андрей", "Тимофей", "Роберт", "Кирилл"]

// push() - добавляет элемент в конец массива
// возвращает длину, при этом меняя исходный массив

console.log(students.push('Глеб')); // 5
console.log(students); // ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"]

// shift() - удаляет первый элемент массива и возвращает удаленный элемент,
// при этом изменяя исходный массив

console.log(students.shift()); // Андрей
console.log(students); // ["Тимофей", "Роберт", "Кирилл", "Глеб"]

// unshift() - добавляет элемент в начало массива
// возвращает длину, при этом меняя исходный массив

console.log(students.unshift('Андрей')); // 5
console.log(students); // ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"]

// join() - преобразует массив в строку, через указанный разделитель
const studentsRow = students.join(';');
console.log(typeof studentsRow); // string
console.log(studentsRow); // Андрей;Тимофей;Роберт;Кирилл;Глеб

// split() - преобразует строку в массив, по разделителю
const studentsArray = studentsRow.split(';');
console.log(typeof studentsAray); // undefinied
console.log(studentsArray); // ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"]
console.log('----------------------------------');

// slice(begin, end) - срез, возвращает участок массива от begin до end, не включая end
// исходный массив при этом не меняется
// используется для создания копии массива

let copyStudent = students.slice(); // создаём копию
console.log(copyStudent); // ["Андрей", "Тимофей", "Роберт", "Кирилл", "Глеб"]

// ТАК ДЕЛАТЬ НЕ ПРАВИЛЬНО, ПОТОМУ ЧТО ПРИ ИЗМЕНЕНИИ copyStudent2 будет изменён
// и students поскольку указатель на ячейку памяти останется тем же
// ЧЕРЕЗ .slice ЗАШИБИСЬ!
/* let copyStudent2 = students;
copyStudent2[2] = 'Алексей';
console.log(copyStudent2); // ["Андрей", "Тимофей", "Алексей", "Кирилл", "Глеб"]
console.log(students); // ["Андрей", "Тимофей", "Алексей", "Кирилл", "Глеб"] */

let sliceStudent = students.slice(1,3); // создаём копию
console.log(sliceStudent); // ["Тимофей", "Роберт"]

const nameStudent = students.slice(-1); 
console.log(nameStudent); // ["Глеб"]

const lastStudentName = students.slice(-3,-1);
console.log(lastStudentName); // ["Роберт", "Кирилл"]

// splice(start[, deleteCount[, item1[, item2[, ...]]]) - позволяет удалять, добавлять,
// заменять элементы поочерёдно или одновременно
// меняет исходный массив и возвращает его

students.splice(1, 1); // Тимофея удалили
console.log(students); // ["Андрей", "Роберт", "Кирилл", "Глеб"]

const additionalStudent = ["Тимофей", "Алексей"];

students.splice(2, 0, ...additionalStudent); // если не нужно удалять, нужно указать 0
console.log(students); // ["Андрей", "Роберт", "Тимофей", "Кирилл", "Глеб"]

// reverse() - переворачивает массив, меняет исходный

const reverseStudent = students.slice().reverse();
console.log(reverseStudent);

// sort() - сортировка массива по убыванию / возрастанию

// concat() - объединяет массивы

const concatStudent = students.concat(reverseStudent);
console.log(concatStudent);