const cardEl = document.querySelector('.card');

/* Array includes() */
const marks = ['sight', 'insights'];

const pickedMark = 'insights';
const isPickedMarkIncluded = marks.includes(pickedMark);

const cardTitleSpanEl = cardEl.querySelector('.card__title mark');
cardTitleSpanEl.textContent = isPickedMarkIncluded ? pickedMark : '';

/* Exponentiation (**) */
const companyAmount = 10 ** 1;

const cardStatusItemEls = cardEl.querySelectorAll('.card__stats-list-item');
cardStatusItemEls[0].querySelector('.num').textContent = companyAmount + 'K+';
