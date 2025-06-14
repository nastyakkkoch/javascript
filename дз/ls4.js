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