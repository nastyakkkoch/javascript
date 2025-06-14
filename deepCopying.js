// Задание №1

const student = {
    name: 'Филл',
    age: 18,
    city: 'New York',
    pets: ['cat', 'dog', 'chiken'],
    favotiteFood: {
        chips: 'lays с зеленым луком',
        cake: 'honey cake',
        soup: 'Tom Yam'
    }
}

// поверхностное копирование Object.assign()
const studentCopy = Object.assign({}, student)
console.log(studentCopy);

studentCopy.name = 'Семен';
studentCopy.favotiteFood.chips = 'lays с муссом из лосося и авокадо';
console.log(studentCopy);

console.log(student.favotiteFood.chips);




// поверхностное копирование Оператор spread (...)

const studentCopy2 = { ...student };
console.log(studentCopy2);

studentCopy2.name = 'Mark';
console.log('Изначальное имя Филл, а стало: ', studentCopy2.name);
console.log('Изначальное имя Филл, а стало: ', student.name);

studentCopy2.favotiteFood.chips = 'lays с беконом';
console.log('Был lays  с зеленым луком, а стал ',studentCopy2.favotiteFood.chips);
console.log('Был lays  с зеленым луком, а стал ', student.favotiteFood.chips);


// своими словами поняла так, 
// что при поверхностном копировании создается копия, 
// в которой объекты и массивы будут изменяться по ссылке,
// как например 'lays с беконом' стал отображаться при 
// обращении к оригинальному объекту student.favotiteFood.chips
//  а имя при обращении к оригинальному объекту так и осталось - Филл




// Задание №2

const people = {
    name: 'Даша',
    age: 13,
    favotiteFood: {
        cake: 'Красный бархат',
        soup: 'Солянка'
    },
    sayHi: () => console.log('Привет, Даша')
}

console.log(people);
const peopleCopy = JSON.parse(JSON.stringify(people));
console.log(peopleCopy);
peopleCopy.name = 'Лариса';
peopleCopy.favotiteFood.cake = 'Наполеон';
console.log('Был Красный бархат, стал ', people.favotiteFood.cake);
console.log('Был Красный бархат, стал ', peopleCopy.favotiteFood.cake);

console.log('Была Даша, стала ', people.name);
console.log('Была Даша, стала ', peopleCopy.name);

// в случае json не изменяется оригинальный объект на всех уровнях вложенности

// также при копировании с помощью json пропадают функции, так как они не являются данными

// Задание №3


// функция deepCopy принимает obj - объект
function deepCopy(obj) {
    // если obj строго равен отсутсвию или тип данных obj строго не равен типу "объект"
    if (obj === null || typeof obj !== 'object') {
        // тогда верни значение obj
        return obj;
    }

    // создаем переменную copy
    //  и проверяем является ли obj массивом (если да, то создается новый массив)
    //  или объектом (если да, то создается новый объект)
    const copy = Array.isArray(obj) ? [] : {};

    // цикл for in перебирает свойства объекта obj
    for (let key in obj) {
        // проверка, что свойства принадлежат объекту, а не прототипу
        if (obj.hasOwnProperty(key)) {
            // в copy[key] сохраняется результат скопированных вложенных массивов или объектов
            copy[key] = deepCopy(obj[key]);
        }
    }
    // верни значение копии исходного obj
    return copy;
}

// создаем переменную original с объектом, в котором есть вложенный объект
const original = { a: 1, b: { c: 2 } };

//  в deepCopyObj записывается результат глубокого копирования original
// создается новый объект copy и копирует a: 1
// создается новый объект  b: {} и копирует c: 2
// в итоге  copy = { a: 1, b: { c: 2 } }; - новый скопированный объект
const deepCopyObj = deepCopy(original);

// в копии меняем значение c на 3
deepCopyObj.b.c = 3;

//видим, что оригинал не изменился
console.log(original.b.c); // 2




