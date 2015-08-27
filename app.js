// Globals
// Grabs the id's for digits
var hour = document.getElementById('hours'),
    minutes = document.getElementById('minutes'),
    seconds = document.getElementById('seconds'),
    miliseconds = document.getElementById('miliseconds'),

// Grabs the id's for the buttons
    startButton = document.getElementById('startButton'),
    pauseButton =  document.getElementById('pauseButton'),
    stopButton = document.getElementById('stopButton'),
    resetButton = document.getElementById('resetbutton'),

    setTime,
    currentTime,
    difference,
    timer = 0;

// Gets current time and sets the interval
var start = function() {
  setTime = Date.now();
  setInterval(update, 100);
};

// Updates the current time
var update = function() {
  currentTime = Date.now();
  difference = currentTime - setTime;
  timer += difference;

  updateScreen();
  setTime = currentTime;
};

// Converts the current time to miliseconds 
var updateScreen = function() {
  miliseconds.innerText = timer/1000;
};

startButton.addEventListener('click', start);
