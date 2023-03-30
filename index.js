const buttons = document.querySelectorAll('button');

let audio;
function playAudio(crash) {
  audio = new Audio(`sounds/${crash}.mp3`);
  audio.play();
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    makeSound(`${button.textContent}`);
    buttonAnimation(`${button.textContent}`)
  });
});

document.addEventListener('keydown', event => {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  if (key === 'w') {
    playAudio('crash')
  } else if (key === 'a') {
    playAudio('kick-bass');
  } else if (key === 's') {
    playAudio('snare');
  } else if (key === 'd') {
    playAudio('tom-1');
  } else if (key === 'j') {
    playAudio('tom-2');
  } else if (key === 'k') {
    playAudio('tom-3');
  } else if (key === 'l') {
    playAudio('tom-4');
  }
}

function buttonAnimation(key) {
  if (key != 'w' && key != 'a' && key != 's' && key != 'd' && key != 'j' && key != 'k' && key != 'l') {
    return;
  }
  let pressedButton = document.querySelector(`.${key}`);
  pressedButton.classList.add('pressed');
  setTimeout(() => pressedButton.classList.remove('pressed'), 100);
}