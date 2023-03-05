// 1 задача

const objUser = {
}
for (let id = 1; id <= 3; id++) {
  let name = prompt('Введите ваше имя')
  let age = +prompt('Введите ваш возраст')
  console.log('Пользователь - ' + id);
  console.log('Ваше имя - ' + name);
  console.log('Ваш возраст - ' + age);
}

// 1 задача

// 2 задача

let products = receipt()
console.log(products);

let obj = {
  allProducts: 'Вы заказали: ',
  price: 0
}

for (const key in products) {
  obj.allProducts += `${key} ${products[key].info}, `;
  obj.price += products[key].price
}
console.log(obj.allProducts + ' общая стоимость ' + (obj.price + 9000) + 'сум с учетом доставки(9000) ');
// 2 задача