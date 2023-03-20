(() => {
  const refs = {
    pushPlay: document.querySelector('[data-how-made-push-play]'),
    hide: document.querySelector('[data-how-made-hide]'),
  };

  refs.pushPlay.addEventListener('click', togglePoster);

  function togglePoster() {
    const hideEl = document.querySelector('[data-how-made-hide]');
    hideEl.classList.add('how-made-is-hidden');

    const videoEl = document.querySelector('.how-made-video');
    const videoSrc = videoEl.getAttribute('src');
    videoEl.setAttribute(
      'src',
      videoSrc + '?autoplay=1&mute=0&rel=0&showinfo=0'
    );
  }
})();
