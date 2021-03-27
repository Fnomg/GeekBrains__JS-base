// 1. Дан код:
//   var a = 1, b = 1, c, d;
// c = ++a; console.log(c);           // 2 -> сначала переменной "с" присваем значение a+1 (только в записи вида инкремента), потом выводим "с"
// d = b++; console.log(d);           // 1 -> переменной "d" присваиваем значение b, а операция инкремента происходит после этого действа, поэтому не фиксируется в переменную
// c = (2+ ++a); console.log(c);      // 5 -> из строки 3-> a = 2, затем с = 2 + а + 1 = 2 + 2 + 1 = 5
// d = (2+ b++); console.log(d);      // 4 -> из строки 4 -> b=2, затем d = 2 + 2, так как инкремента после идет, то он не учитывается для переменной d
// console.log(a);                    // 3 -> из строки 5 -> а = 3
// console.log(b);                    // 3 -> из строки 6-> b = 3
// Почему код даёт именно такие результаты?


// 2. Чему будет равен x в примере ниже?
// var a = 2;
// var x = 1 + (a *= 2); //-> сначала скобки, потом сложение вне скобок. x = 1 + (a = a * 2); x = = 1 + ( 4 ) = 5
// теперь a = 4, x = 5


// 3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
//   если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

// let a = 5;
// let b = 6;
//
// if (a>=0 && b>=0) {
//   console.log(Math.max(a,b) - Math.min(a,b))
// } else if ( a < 0 && b < 0) {
//   console.log(a*b)
// } else {
//   console.log(a+b)
// }

// 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.
//   Дополнительно, по желанию - сделать данный пример через рекурсию

const MIN = 0;
const MAX = 15;
let a = Math.ceil(Math.random() * (MAX - MIN) - MIN)
console.log('число ', a)
console.log('прогон до 15')

switch (a) {
  case 0 :
    console.log(0);
  case 1 :
    console.log(1)
  case 2 :
    console.log(2);
  case 3 :
    console.log(3)
  case 4 :
    console.log(4);
  case 5 :
    console.log(5)
  case 6 :
    console.log(6);
  case 7 :
    console.log(7)
  case 8 :
    console.log(8);
  case 9 :
    console.log(9)
  case 10 :
    console.log(10);
  case 11 :
    console.log(11)
  case 12 :
    console.log(12);
  case 13 :
    console.log(13)
  case 14 :
    console.log(14);
  case 15 :
    console.log(15)
}


// 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

const sum = (a,b) => a + b; //оператор return он как бы есть, а как бы и нет)))
const minus = (a,b) => a - b;
const multi = (a,b) => a * b;
const divis = (a,b) => a / b;

// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
// где arg1, arg2 – значения аргументов, operation – строка с названием операции.
//   В зависимости от переданного значения операции выполнить одну из арифметических операций
// (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).

function mathOperation(arg1, arg2, operation){
  switch (operation) {
    case 'сложение':
      console.log(sum(arg1, arg2))
      break
    case 'вычитание':
      console.log(minus(arg1, arg2))
      break
    case 'умножение':
      console.log(multi(arg1, arg2))
      break
    case 'деление':
      console.log(divis(arg1, arg2))
      break
    default:
      alert('Вы ввели не так. Вот пример: 2,3,сложение')
  }
}
console.log(mathOperation(5,6,'сложение'))


// 7) *Сравнить null и 0. Попробуйте объяснить результат.
console.log(null == 0)
console.log(null > 0)
console.log(null < 0)
console.log(typeof null)  // ->объект
console.log(typeof 0)     // -> число

// 8) *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val,pow) {
  if (pow === 0) {
    return 1
  } else if (pow === 1) {
    return  val
  } else if (pow < 0) {
    return 'степень должна быть равна и больше 0'
  } else {
    return val * power(val, pow - 1)
  }
}