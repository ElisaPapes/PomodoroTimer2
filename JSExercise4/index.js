// Variables Timer

let minutesDisplay = document.querySelector('.minutes');
let secondsDisplay = document.querySelector('.seconds');
let timerTimeOut


// Variables Controls

const play = document.querySelector('.play');
const stop = document.querySelector('.stop');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus')

// Variables Musics

const florest = document.querySelector('.florest');
const rain = document.querySelector('.rain');
const coffeeShop = document.querySelector('.coffeeShop');
const fireplace = document.querySelector('.fireplace');

// Variables Audios

const audioFlorest = new Audio('./musics/Floresta.wav')
const audioRain = new Audio('./musics/Chuva.wav')
const audioCoffeShop = new Audio('./musics/Cafeteria.wav')
const audioFireplace = new Audio('./musics/Lareira.wav')
const endTimerAudio = new Audio ('./musics/audios_button-press.wav')

// Code

let minutes = Number(minutesDisplay.textContent);
let seconds = Number(secondsDisplay.textContent);

play.addEventListener('click', timerPlay);
stop.addEventListener('click', timerStop);
plus.addEventListener('click', timerPlus);
minus.addEventListener('click', timerMinus);

function timerPlay(){
  timerTimeOut = setTimeout(() => {
    
    if(seconds <= 0) {
      seconds = 59
      --minutes
    } else {
      --seconds;
    }

    if (minutes <= 0){
      minutes = 25
      endTimerAudio.play()
    }
  
    console.log(minutes);
    console.log(seconds);
  
    minutesDisplay.textContent = String(minutes).padStart(2, "0");
    secondsDisplay.textContent = String(seconds).padStart(2, "0");

    timerPlay();
  }, 1000)
}

function timerStop() {
  clearTimeout(timerTimeOut);  
}

function timerPlus() {
  minutes = minutes + 5;
}

function timerMinus() {
  minutes = minutes - 5;
}


// Code Musics

florest.addEventListener('click', function () {
  florest.classList.add('chosen');
  rain.classList.remove('chosen');
  coffeeShop.classList.remove('chosen');
  fireplace.classList.remove('chosen');
  audioFlorest.play();
  audioRain.pause();
  audioCoffeShop.pause();
  audioFireplace.pause();
  audioFlorest.loop = true;
})

rain.addEventListener('click', function () {
  florest.classList.remove('chosen');
  rain.classList.add('chosen');
  coffeeShop.classList.remove('chosen');
  fireplace.classList.remove('chosen');
  audioFlorest.pause();
  audioRain.play();
  audioCoffeShop.pause();
  audioFireplace.pause();
  audioRain.loop = true;
})

coffeeShop.addEventListener('click', function () {
  florest.classList.remove('chosen');
  rain.classList.remove('chosen');
  coffeeShop.classList.add('chosen');
  fireplace.classList.remove('chosen');
  audioFlorest.pause();
  audioRain.pause();
  audioCoffeShop.play();
  audioFireplace.pause();
  audioCoffeShop.loop = true;
})

fireplace.addEventListener('click', function () {
  florest.classList.remove('chosen');
  rain.classList.remove('chosen');
  coffeeShop.classList.remove('chosen');
  fireplace.classList.add('chosen');
  audioFlorest.pause();
  audioRain.pause();
  audioCoffeShop.pause();
  audioFireplace.play();
  audioFireplace.loop = true;
})