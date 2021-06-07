window.addEventListener("keydown", playAudio);

let clickKeys = document.querySelectorAll(".key");
clickKeys.forEach((key) => key.addEventListener("click", playAudioClick));

function playAudio(e) {
  const audio = document.querySelector(`audio[data-key="${e.key}"]`);
  const key = document.querySelector(`.key[data-key="${e.key}"]`);
  console.log(key);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function playAudioClick(e) {
  pos = e.currentTarget.id;
  const audio = document.querySelector(`audio[data-key="${pos}"]`);
  const key = document.querySelector(`.key[data-key="${pos}"]`);
  console.log(audio);
  // if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  key.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
