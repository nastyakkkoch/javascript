let height = Number(prompt('Введите рост (в метрах)'))
let weight = Number(prompt('Введите вес (кг)'))

let imt = weight / height ** 2

console.log(imt)

if (imt > 30) {
    alert('Избыточная масса');
} else if (imt > 25) {
   alert('Нормальный вес');
} else if (imt > 18) {
    alert('Недостаточная масса тела');
} else {
    alert('Выраженный дефицит массы тела');
}

const promo = prompt('Введи промокод')
let promoName
switch (promo) {
    case 'ЗИМА':
        promoName = 'Ваш подарок скидка 10%!';
        break;
    case 'ЯНВАРЬ':
        promoName = 'Ваш подарок - десертый ролл!';
        break;
    case '2025':
        promoName = 'Ваш подарок - сертификат на 500 рублей!';
        break;
    case 'елка':
        promoName = 'Ваш подарок - набор стикеров!';
        break;
    default:
        promoName = 'Неверный промокод'
}
alert(promoName)

const integer = 42;
const float = 3.14;
const negative = -27;
const infinity = Infinity;
const notANumber = NaN;