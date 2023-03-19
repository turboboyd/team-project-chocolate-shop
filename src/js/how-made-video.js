(() => {
  const refs = {
    pushPlay: document.querySelector('[data-how-made-push-play]'),
    hide: document.querySelector('[data-how-made-hide]'),
  };

  refs.pushPlay.addEventListener('click', togglePoster);

  function togglePoster() {
    refs.hide.classList.toggle('how-made-is-hidden');
  }
})();
