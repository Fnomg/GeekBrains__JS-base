// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

// let n = 100;
// let i = 1;
//
// nextValue:
//   while (i < n)  {
//     i++;
//     let sqrt = Math.sqrt(i)
//     for (let j = 2; j < sqrt; j++) {
//       if (i % j == 0) continue nextValue;
//     }
//     console.log(i);
// }


// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

// let trash = [
//   {
//     title: 'car',
//     price: 120,
//     count: 2
//   },
//   {
//     title: 'book',
//     price: 130,
//     count: 5
//   },
//   {
//     title: 'good mood',
//     price: 3200,      //бесценно
//     count: 1
//   }
// ]
//
// const countBasketPrice = (arr) => {
//   let cost = 0;
//   let length = arr.length;
//   for (let i = 0; i < length; i++) {
//     let a = arr[i].price * arr[i].count
//     cost +=a
//   }
//   return cost
// }
//
// console.log('К оплате ' + countBasketPrice(trash))


// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
//   for(…){// здесь пусто}


  // for (let i = 0; i <= 9; i++)
  // console.log(i)




//
// 5) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx


//   let length = 20;
//   let str = 'x'
//   for (let i = 1; i <= 20; i++) {
//     console.log(str.repeat(i))
//   }
