var form = document.querySelector('.js-form'); // выбираем форму по классу
form.addEventListener('submit', function (event) {
  // отменяем стандартное поведение формы
  event.preventDefault();
  // выбираем все поля ввода, имеющие атрибут pattern
  var fields = form.querySelectorAll('input[pattern]');
  // проходим по всем полям и проверяем их валидность
  for (var i = 0; i < fields.length; i++) {
    if (!fields[i].checkValidity()) {
      // если поле не прошло валидацию, показываем пользователю соответствующее сообщение
      alert(fields[i].title);
      return;
    }
  }
  // если все поля прошли валидацию, отправляем форму
  form.submit();
});
