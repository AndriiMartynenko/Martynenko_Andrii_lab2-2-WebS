window.addEventListener('keydown', function (e) {
  let keycode = e.keyCode;

  let sound = document.querySelector('audio[data-key="' + keycode + '"]');

  if (sound) {

    play(sound);
    let key = document.querySelector('.key[data-key="' + keycode + '"]');
    key.classList.add('playing');

  }

});

window.addEventListener('keyup', function () {

  let playing = document.querySelector('.playing');

  if (playing) playing.classList.remove('playing');

});

var play = function (audio) {

  if (audio.duration > 0 && !audio.paused) {

    audio.pause();
    audio.currentTime = 0;

  }

  audio.play();
}