// выбираем модалки buynow и modal-feedback
const modalEl = document.querySelector('.modal.buynow');
const modalHero = document.querySelector('.modal-hero');
// выбираем  кнопку submit модалки buynow
const submitButton = document.querySelectorAll('.buynow-submit');

// выбираем форму
const form = document.forms['buynow'];

// прослушивание инпутов
form.addEventListener('input', e => {
// отслеживание инпутов если модалка активна
  if (modalEl.classList.contains('active')) {
    if (//проверка на путые поля
      form.elements[0].value !== '' &&
      form.elements[1].value !== '' &&
      form.elements[2].value !== '' &&
      form.elements[3].value !== '' &&
      form.elements[4].value !== ''
    ) {
      //прослушивание события сабмит: закрытие модалки buynow и открыие модалки modal-feedback
      form.addEventListener('submit', e => {
        e.preventDefault();
        modalEl.classList.remove('active');
        modalHero.classList.add('active');
      });
    }
  }
});
