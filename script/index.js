// popup Edit
const popupEditElement = document.querySelector('.popup_edit');
const popupEditBtnClose = popupEditElement.querySelector('.popup__btn-close'); // close Edit
const formEditElement = popupEditElement.querySelector('.popup__form');
const nameInput = formEditElement.querySelector('#name');
const jobInput = formEditElement.querySelector('#job');

// popup Add
const popupAddElement = document.querySelector('.popup_add');
const popupAddBtnClose = popupAddElement.querySelector('.popup__btn-close'); // close Edit

// profile
const profileElement = document.querySelector('.profile'); // for btn edit and add
const profileBtnEdit = profileElement.querySelector('.profile__edit'); // edit
const profileBtnAdd = profileElement.querySelector('.profile__add'); // add

// array Cards #2
const placesElement = document.querySelector('.places');
const cardsContainer = placesElement.querySelector('.places__items');
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

// function opem/close #1
function openPopup(popupElement) {
  popupElement.classList.add('popup_opened');
}

function closePopup(popupElement) {
  popupElement.classList.remove('popup_opened');
}

// open/close modal edit #1 #3
profileBtnEdit.addEventListener('click', function () {
  openPopup(popupEditElement);
});
profileBtnAdd.addEventListener('click', function () {
  openPopup(popupAddElement);
});

popupEditBtnClose.addEventListener('click', function () {
  closePopup(popupEditElement);
});
popupAddBtnClose.addEventListener('click', function () {
  closePopup(popupAddElement);
});

// btn save Edit
function formSubmitHandler(evt) {
  evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы
  profileElement.querySelector('.profile__title').textContent = nameInput.value;
  profileElement.querySelector('.profile__subtitle').textContent = jobInput.value;
  closePopup(popupEditElement);
}

formEditElement.addEventListener('submit', formSubmitHandler); // Прикрепляем обработчик к форме

//
function addCard (name, link) {
  const placesTemplate = document.querySelector('#places-template').content; // получаем содержимое template
  const placesElement = placesTemplate.querySelector('.places__item').cloneNode(true); // копируем содержимое шаблона

  placesElement.querySelector('.places__title').textContent = name; // добавляем введенные значения
  placesElement.querySelector('.places__image').src = link; // добавляем
  placesElement.querySelector('.places__btn-like').addEventListener('click', function(evt) { // добавляем обработчик событий для клика
    evt.target.classList.toggle('places__btn-like_active'); // если такого класса нет, то добавляем, если есть удаляем
  });
  placesElement.querySelector('.places__image').addEventListener('click', function(evt) { // для открытия картинок
    console.log('open img');
  });

  cardsContainer.append(placesElement); // добавляем в конец контейнера songsContainer
};

// create initial cards #2
initialCards.forEach(item => {
  addCard(item.name, item.link);
});






/*
function createCard(nameValue, linkValue) {
  ...
  const likeButton = cardsItem.querySelector('.card__like-button');
  ...

  deleteButton.addEventListener('click', function () {
    const currentItem = deleteButton.closest('.cards__item');
    currentItem.remove();
  });

  likeButton.addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like-button_active');
  });
}
*/