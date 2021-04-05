// 1. Написать функцию, преобразующую число в объект. Передавая на вход число от 0 до 999, мы должны получить на выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и вернуть пустой объект.

// const MIN = 0;
// const MAX = 999;
// let num = Math.floor(Math.random() * (MAX - MIN) + MIN);
//
// let obj = {}
//
// const getObjFromNumber = (num) => {
//   console.log(num)
//   if (num > MAX || num < MIN) {
//     return obj
//   }
//
//   obj.hundreds = Math.floor(num / 100)
//   obj.dozens = (Math.floor(num / 10)) % 10;
//   obj.units = num % 10
//
//   return obj
//
// }
//
// console.log(getObjFromNumber(num))


// 2. Для игры, реализованной на уроке, добавить возможность вывода хода номер n (номер задается пользователем)

// ответ в gameCode.js

// 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»

let questions = [
  {
    id: 0,
    question: 'Ближайшая звезда к планете Земля?',
    price: 10
  },
  {
    id: 1,
    question: 'Сколько будет 2 + 2?',
    price: 10
  },
  {
    id: 2,
    question: 'Самая известная формула в мире? ',
    price: 10
  },
  {
    id: 3,
    question: 'Какого цвета небо?',
    price: 10
  },
  {
    id: 4,
    question: 'Для чего нужен мизинец?',
    price: function (val) { return val * 2 }
  },
]

let allAnswers = [
  {
    id: 0,
    count: 4,
    right: 3,
    a: 'Марс',
    b: 'Луна',
    c: 'Солнце',
    d: 'Юпитер'
  },
  {
    id: 1,
    count: 4,
    right: 4,
    a: '3',
    b: '5',
    c: '22',
    d: '4'
  },
  {
    id: 2,
    count: 4,
    right: 1,
    a: 'E=mc^2',
    b: 'a^2 + b^2 = c^2',
    c: 'V - E + F = 2',
    d: '3^2 + 4^2 = 5^2'
  },
  {
    id: 3,
    count: 4,
    right: 3,
    a: 'Красное',
    b: 'Белое',
    c: 'Голубое',
    d: 'Прозрачное'
  },
  {
    id: 4,
    count: 4,
    right: 1,
    a: 'Биться об угол',
    b: 'Ковыряться в носу',
    c: 'Давить тараканов',
    d: 'Не нужен'
  }
]

const getGame = (question, answers) => {
  alert(`Правила игры: \n Есть 4 простых вопроса и один сложный. \n За каждый ответ на простой вопрос вы получаете 10 монет \n 
  Если вы угадаете ответ на последний вопрос, сумма выигрыша УДВАИВАЕТСЯ. \n Если Вы не правильно ответите на сложный вопрос, то ВСЕ ДЕНЬГИ СГОРАЮТ\n Для выходы из игры  -1 \n Удачи!`)
  let money = 0;

  const newQuestion = (i) => {
    return (
      +prompt(`Вопрос ${i + 1}.--` + questions[i].question + '\n' + 'вариант 1 --' + allAnswers[i].a + '\n' +'вариант 2 --' + allAnswers[i].b +'\n' +'вариант 3 --' + allAnswers[i].c +'\n' + 'вариант 4 --' + allAnswers[i].d )
    )
  }




  let isRight = (obj) => {
    let arr = Object.values(obj)
    let a = obj.right;
    return arr[obj.right + 2]
  }
  for (let i = 0; i < 5; i++) {
    let data = newQuestion(i);
    if (data === -1) {
      break;
    } else {
      if (data === allAnswers[i].right) {
        if (i === 4) {
          money = questions[i].price(money)
          alert('Вы красава' + '\n' + 'В чемодане с деньгами ' + money + ' монет')
        } else {
          money += questions[i].price;
          alert('Верно. Дзынь, отсыпало 10 монет' + '\n' + 'В чемодане с деньгами ' + money + ' монет')
        }

      } else {
        if ( i === 4) {
          money = 0;
          alert('Плак плак, неверно' + '\n' + 'В чемодане с деньгами ' + money + ' монет' + '\n' + 'Верный ответ --' + isRight(allAnswers[i]))
        } else {
          alert('Плак плак, неверно' + '\n' + 'В чемодане с деньгами ' + money + ' монет' + '\n' + 'Верный ответ --' + isRight(allAnswers[i]))
        }

      }
    }

  }

}

getGame(questions, allAnswers)