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
    timer = 0,
    interval;

// Gets current time and sets the interval
var start = function() {
  setTime = Date.now();
  interval = setInterval(update, 100);
};

// This cancel the setInterval when called
var pause = function() {
  clearInterval(interval);
};

// This cancels & sets the timer to 0
var stop = function() {
  clearInterval(interval);
  timer = 0;
}
;
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

// Fires the start() when the #startButton is clicked
startButton.addEventListener('click', start);
// Fires the pause() when the #pauseButton is clicked
pauseButton.addEventListener('click', pause);
// Fires the stop() when the #stopButton is clicked
stopButton.addEventListener('click', stop);
