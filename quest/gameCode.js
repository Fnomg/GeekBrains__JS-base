//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

let event, ok;

let answers = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
        let obj = {
            question: works.a00,
            answer: event === 1 ? works.a1 : (event === 2 ? works.a2 : 'Вы ввели некорректный ответ')
        }
        answers.push(obj)
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
                let obj = {
                    question: works.b00,
                    answer: event === 1 ? works.b1 : (event === 2 ? works.b2 : 'Вы ввели некорректный ответ')
                }
                answers.push(obj)
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        let obj = {
                            question: works.d00,
                            answer: event === 1 ? works.d1 : (event === 2 ? works.d2 : 'Вы ввели некорректный ответ')
                        }
                        answers.push(obj)

                    }
                } while (!ok);

                break;
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        let obj = {
                            question: works.d00,
                            answer: event === 1 ? works.d1 : (event === 2 ? works.d2 : 'Вы ввели некорректный ответ')
                        }
                        answers.push(obj)
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
                let obj = {
                    question: works.c0,
                    answer: event === 1 ? works.c1 : (event === 2 ? works.c2 : 'Вы ввели некорректный ответ')
                }
                answers.push(obj)
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        let obj = {
                            question: works.d0,
                            answer: event === 1 ? works.d1 : (event === 2 ? works.d2 : 'Вы ввели некорректный ответ')
                        }
                        answers.push(obj)
                    }
                } while (!ok);

                break;
            case 2: // Второе действие
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                        let obj = {
                            question: works.d0,
                            answer: event === 1 ? works.d1 : (event === 2 ? works.d2 : 'Вы ввели некорректный ответ')
                        }
                        answers.push(obj)
                    }
                } while (!ok);

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

let lastQ = +prompt('Ваш путь был длинною в ' + answers.length + ' ходов. Какой посмотрим повторно? Для выхода, как обычно -1')
if (lastQ > answers.length) {
    alert('Ай ай ай, такого хода не было. Прощайте')
} else {
    alert(answers[lastQ - 1].question + answers[lastQ - 1].answer)
}



//------------------------------------------
function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
	return true;
    
}

