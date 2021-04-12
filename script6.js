const PLANTS__LIST = document.querySelector('.plants__list');
const TRASH = document.querySelector('.plants__trash-list')
const CARD__TITLE = ['Кактус 1', 'Кактус 2', 'Кактус 3', 'Кактус 4'];
const CARD__TEXT= ['Обычный кактус', 'Кактус покруче', 'Совсем не кактус', 'Кактус который не смог']
const CARD__PRICE= [5, 7, 2, 1]
const CARD__BUTTON = ['Купить']
const TRASH__COST = document.querySelector('.trash__cost');
let all = 0;
const createCard = (i) => {

  let newCard = document.createElement('li');

  let cardTitle = document.createElement('h3');
  cardTitle.innerText = CARD__TITLE[i];
  newCard.appendChild(cardTitle);

  let cardImg = document.createElement('img');
  cardImg.setAttribute('src', `./img/g${i}.png`)
  newCard.appendChild(cardImg);

  let cardText = document.createElement('p');
  cardText.innerText = CARD__TEXT[i];
  newCard.appendChild(cardText);

  let cardButton = document.createElement('button');
  cardButton.innerText = CARD__BUTTON[0];
  cardButton.setAttribute('onclick', 'add(this)')
  cardButton.setAttribute('id', `${i}`)
  newCard.appendChild(cardButton);

  PLANTS__LIST.appendChild(newCard)
}

for (let i = 0; i<=3; i++) {
  createCard(i)
}

function add(e){
  console.log(e.id)
  let trashList = document.createElement('ul')

  let trashItem = document.createElement('li')
  trashItem.innerText = `${CARD__TITLE[e.id]}_________Стоимость - ${CARD__PRICE[e.id]} у.е.`;
  trashList.appendChild(trashItem)
  trashCost(CARD__PRICE[e.id]);
  TRASH.appendChild(trashList)


}

function trashCost(price){
  all += price;
  TRASH__COST.innerText = `В корзине товаров на ${all} у.е.`;
}

