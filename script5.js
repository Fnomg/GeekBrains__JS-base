//1. Создать функцию, генерирующую шахматную доску. При этом можно использовать любые html-теги по своему желанию. Доска должна быть разлинована соответствующим образом, т.е. чередовать черные и белые ячейки. Строки должны нумероваться числами от 1 до 8, столбцы – латинскими буквами A, B, C, D, E, F, G, H.

const DESC = document.querySelector('.desc')
const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const CARD__WHITE = [ '♙', '♖', '♘', '♗', '♔', '♕'];
const CARD__BLACK = [ '♟', '♜', '♞', '♝', '♚', '♛'];

for (let i = 0; i < 10; i++) {
  let newStr = document.createElement('ul')
  newStr.classList.add('str');

  DESC.appendChild(newStr)


  for (let j = 0; j < 10; j++) {
    let newEl = document.createElement('li');
    newEl.classList.add('square');

    if (i === 9 && j != 0 && j != 9) {
      newEl.innerText = ALPHABET[j-1];
    }

    if (i === 0 && j != 0 && j != 9) {
      newEl.innerText = ALPHABET[j-1];
      newEl.classList.add('reverse');
    }

    if (j === 0) {
      newEl.innerText = (9-i).toString();

    }

    if (j === 9) {
      newEl.innerText = i.toString();
      newEl.classList.add('reverse');
    }

    if (j != 0 && j != 9) {

      if (i === 2 || i === 7 ) {
        newEl.innerText = i === 2 ? CARD__WHITE[0] : CARD__BLACK[0];
      }

      if ((i === 1 || i === 8 )) {
        if  (j ===1 || j === 8) {
          newEl.innerText = i === 1 ? CARD__WHITE[1] : CARD__BLACK[1];
        }
        if (j === 2 || j === 7) {
          newEl.innerText = i === 1 ? CARD__WHITE[2] : CARD__BLACK[2];
          // newEl.innerText = CARD__WHITE[2];
        }
        if (j === 3 || j === 6) {
          newEl.innerText = i === 1 ? CARD__WHITE[3] : CARD__BLACK[3];
          // newEl.innerText = CARD__WHITE[3];
        }
      }
      if (i === 1) {
        if (j === 4) {
          newEl.innerText = CARD__WHITE[5];
        }
        if (j === 5) {
          newEl.innerText = CARD__WHITE[4];
        }
      }

      if (i === 8) {
        if (j === 5) {
          newEl.innerText = CARD__BLACK[5];
        }
        if (j === 4) {
          newEl.innerText = CARD__BLACK[4];
        }
      }
  }



    newStr.appendChild(newEl)
  }
}
